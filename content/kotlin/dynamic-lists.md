

the current version (as of 2021-xx-xx)

// https://developer.android.com/jetpack/androidx/releases/recyclerview#recyclerview-1.2.1

implementation 'androidx.recyclerview:recyclerview:1.2.1'


```kotlin
<androidx.recyclerview.widget.RecyclerView
        android:layout_marginTop="20dp"
        android:id="@+id/rvTodos"
        android:layout_width="314dp"
        android:layout_height="208dp"
        android:layout_marginBottom="360dp"
        app:layout_constraintBottom_toTopOf="@+id/etTodo"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.494"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
```

i created a new layout resource file

```
 <TextView
        android:id="@+id/tvTitle"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:text="Title (will be replaced)"
        android:textSize="24sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toStartOf="@+id/cbDone"
        app:layout_constraintHorizontal_bias="1.0"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <CheckBox
        android:id="@+id/cbDone"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginEnd="28dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
```


no idea what this does

````
class TodoAdapter {

    inner class TodoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        
    }
}
````


````
data class Todo(
    val title: String,
    var isChecked: Boolean
)
````


We go back into our TodoAdapter


````
class TodoAdapter(
    var todos: List<Todo>
) {

    inner class TodoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        
    }
}
````

and we inherit some shit

````
class TodoAdapter(
    todos: List<Todo>
) : RecyclerView.Adapter<TodoAdapter.TodoViewHolder>() {

    inner class TodoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

    }
}
````


there are 3 abstract methods we need to override
after some painful ball-scratching i came up with this
i could not use view binding even though the tutorial did it.

```
class TodoAdapter(
    var todos: List<Todo>
) : RecyclerView.Adapter<TodoAdapter.TodoViewHolder>() {

    inner class TodoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TodoViewHolder {
        // if user scrools and needs to show a new item to dispaly (and recycle old)

        // inflate your layout file
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_todo, parent, false)
        // always false in recycleview

        return TodoViewHolder(view)
    }

    override fun getItemCount(): Int {
        // return how many items in the recyclerView
        return todos.size
    }

    override fun onBindViewHolder(holder: TodoViewHolder, position: Int) {
        // holder =
        // position = position of view

        //  this will set the item to the item_todo.xml

        holder.itemView.findViewById<TextView>(R.id.tvTitle).text = todos[position].title
        holder.itemView.findViewById<CheckBox>(R.id.cbDone).isChecked = todos[position].isChecked


    }
}
```

now we can put some data into our recycleview


```
class MainActivity : AppCompatActivity() {

    var todoList = mutableListOf(
        Todo("eat ass", false),
        Todo("eat hamburger", false),
        Todo("eat pickles", false))

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val adapter = TodoAdapter(todoList)

        val rvTodos = findViewById<RecyclerView>(R.id.rvTodos)
        rvTodos.adapter = adapter
        rvTodos.layoutManager = LinearLayoutManager(this)

        findViewById<Button>(R.id.btnTodo).setOnClickListener {
            val todo = findViewById<EditText>(R.id.etTodo)
            val title = todo.text.toString()
            todo.text.clear()

            todoList.add(Todo(title, false))
            adapter.notifyItemInserted(todoList.size - 1)
        }
    }
}
```

this worked sweet! but i had problems with deleting items from the list with this implementation