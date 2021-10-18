//===> 1.import Subject from rxjs and create a new variable from the Subject class
import { Subject } from 'rxjs'

  /*
  An RxJS Subject can act as both an Observable and an Observer at the same time.
  In this way, values can be multicasted to many Observers from it 
  so that when a Subject receives any data,
  that data can be forwarded to every Observer subscribed to it.
  */
const subject = new Subject()
//<=== 1

//===>3.create an object for our initial chat state:
const initialState = {
  data: [],
  newDataCount: 0
}

let state = initialState
//<==== 3

//===> 2. create a subscribe method for this purpose
const chatStore = {

  //===> 4.create an init() method that will initialize our component’s state whenever it’s mounted:
  /*
  In our initialState object,
  the newDataCount will be used by our notification functionality 
  to tell when new data has been pushed to our state.

  Now that we have our state object, 
  let’s 
  */
  init: () => {
    //===> 6
    /*
    add a functionality for resetting our new data count each time the messages are viewed
    */
    state = {...state, newDataCount: 0}
    //<=== 6
    subject.next(state)
  },
  //<=== 4

  /*
  we’ll be subscribing our different React Hooks setState functions
  to our RxJS Subject so that when it receives any data, 
  it forwards that data to every state associated with our setState function.
  */
  subscribe: setState => subject.subscribe(setState),

  //===> 5. create a sendMessage() method
  /*
  We’ll call this method whenever our users hit the send message button. 
  Our sendMessage() method will receive a message argument, 
  which we’ll append to our state.data array. 
  Remember that our message argument is an object with keys person and text.
  */
  sendMessage: message => {
    state = {
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount + 1
    }
    subject.next(state)
  },
  //<=== 5

  //===> 7. removing data from the store
  clearChat: () => {
    state = initialState
    subject.next(state)
  },
  initialState
  //<=== 7
}
//<===== 2

export default chatStore