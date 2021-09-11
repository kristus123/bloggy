```kotlin
findViewById<Button>(R.id.btn_buy_ticket).setOnClickListener {
            supportFragmentManager.commit {
                add(R.id.container, BusTripCounter())
            }
        }
```


