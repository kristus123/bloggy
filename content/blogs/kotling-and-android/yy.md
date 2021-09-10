view binding = faster (in compile time as well)
working with obserables = easier since you don't have to update ui
view binding enabled in build.gradle gives us access to a viewbinding classs


data binding = annotation processing
- nullable fields are scary



class FragmentTest : Fragment(R.layout.fragment_test) {

    private lateinit var binding: FragmentTestBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentTestBinding.bind(view);

        binding.tvHelloWorld
    }
}

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)

        setContentView(binding.root)

        binding.tvHelloWorld
    }
}