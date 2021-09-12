they are lightweight threads which run inside a thread that can be suspended and can also switch context to another thread

```
implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.5'
implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.5'
```

they need to be imported 

```
GlobalScope.launch { // this will be closed when the app is closed }
```

suspended workers

if main thread finishes,then all other coroutines will be cancelled

suspended functions (suspend fun methodName())
can only be run within another suspended function or a coroutine (coroutine scope)

```
GlobalScope.launch(Dispatchers.IO) {
    // this will run in io thread context
    withContext(Dispatchers.MAIN) {
        // this will run in main thread context
    }

}
```