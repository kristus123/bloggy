```
class SharedDataViewModel : ViewModel() {
    private var _country = MutableLiveData("serbia")

    val country: = LiveData<String> = _country


    fun saveCountry(newCountry: String) {
        _country.value = newCountry
    }
}
```


```
private val sharedViewModel: SharedViewModel by activityViewModel() // set shared scope to activity 
```

https://www.awesomescreenshot.com/image/13312191?key=5be9129a9a201bdfea41b95c99abf8b4

a normal viewModel does not share state between fragments

in order to get a shared ViewModel you need to scope the viewModel to an activity