import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (_, a, _, b) = bf.readText().trim().split(System.lineSeparator())
    val list1 = a.split(" ").sorted()
    val list2 = b.split(" ")
    val output = mutableListOf<String>()

    list2.forEach { output.add(if(list1.binarySearch(it) >= 0) "1" else "0") }
    println(output.joinToString(System.lineSeparator()))
}