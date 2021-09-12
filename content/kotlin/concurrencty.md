a coroutine is async {...} and launch{...}

suspended methods are used to make response async with livedata

```
fun main() = runBlocking { // this: CoroutineScope - runBlocking makes it possible for the world of normal methods and suspended methods to live in harmony
    launch { // launch a new coroutine and continue (this only exists within the CoroutineScope)
        delay(1000L) // non-blocking delay for 1 second (default time unit is ms) (this does not block the underlyig thread made by runBlocking)
        println("World!") // print after delay
    }
    println("Hello") // main coroutine continues while a previous one is delayed
}
```
It will print the following
```bash
Hello
World!
```




```
suspend fun fetchData() = (println("fetching"))
```

suspended functions can be called just like other methods and executed sequentially

```
fetchData()
return userName
```

This does exactly what it says, it fetches data and returns the username 


you can call the method async by doing

```
val data = async { fetchData() }
return userName
```

you can use `await` on async blocks in order to fetch the result

```
suspend fun sum(): Int = coroutineScope {
    val one = async { getSuperLargeNumber() }
    val two = async { getSuperLargeNumber() }

    one.await() + two.await()
}
```


if you want to call a coroutine you will need to use the `launch` keyword

```
fun postItem(item: Item) {
    launch {
        val token = preparePost()
        val post = submitPost(token, item)
        processPost(post)
    }
}

suspend fun preparePost(): Token {
    // makes a request and suspends the coroutine
    return suspendCoroutine { /* ... */ }
}
```