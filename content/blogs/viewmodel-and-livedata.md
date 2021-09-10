a viewmodel is a class that is used to store and manage UI related data

It is quite simple to use livedata together with listeners 

```java
class MainActivity : AppCompatActivity() {

    private lateinit var viewModel: TestViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        viewModel = ViewModelProvider(this).get(TestViewModel::class.java)

        viewModel.currentNumber.observe(this, {
            findViewById<Button>(R.id.tv_textView).text = it.toString()
        })

        viewModel.currentBoolean.observe(this, {
            findViewById<Button>(R.id.tv_booleanText).text = it.toString()
        })

        findViewById<Button>(R.id.btn_button).setOnClickListener {
            viewModel.currentNumber.value = ++viewModel.number
            viewModel.currentBoolean.value = viewModel.number % 2 == 0
        }
    }
}
```
```java
class TestViewModel : ViewModel() {

    var number = 0

    val currentNumber: MutableLiveData<Int> by lazy {
        MutableLiveData<Int>()
    }

    val currentBoolean: MutableLiveData<Boolean> by lazy {
        MutableLiveData<Boolean>()
    }
}
```


// activity_main.xml 
```xml

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/tv_textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="0"
        android:textColor="@color/black"
        android:textSize="40sp" />

    <TextView
        android:layout_above="@id/tv_textView"
        android:id="@+id/tv_booleanText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="..."
        android:textColor="@color/black"
        android:textSize="20sp" />

    <Button
        android:id="@+id/btn_button"
        android:layout_below="@id/tv_textView"
        android:layout_width="wrap_content"
        android:background="@color/black"
        android:layout_centerHorizontal="true"
        android:text="+1"
        android:layout_height="wrap_content" />

</RelativeLayout>
```
