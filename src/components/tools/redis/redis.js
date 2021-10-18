/**
 * redis is a type of database and more specifically nosql database
 * all the data stored inside of key value pairs
 * redis working memory your ram on your computer
 * it used more for caching where you take things access a lot
 * or things that take a long time to compute
 * you're have redis sitting in front of database
 * and mongodb on backend
 * */

//--install redis
//sudo apt-get install redis

//--run redis
//redis-server

//redis-cli
//--to quit
//quit

//--set key
//SET [key] [keyname]
//--example
//SET name kyle
//GET name  => kyle
//SET age 26
//GET age => 26
//DELETE age
//EXISTS name => true
//KEYS * => list all key

//--expiration
//ttl name => -1 (no expiration at all)// ttl means check expiration status
//expire name 10
// -2 means it's gone

//--set expiration with key
//setex name 10 kyle