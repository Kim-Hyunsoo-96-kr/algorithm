import java.io.*
import java.util.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).dropLast(1)

    val output = LinkedList<String>()

    input.forEach {
        val (a,b,c) = it.split(" ").map { it.toInt() }.sorted()
        output.add(if(c*c == a*a + b*b) "right" else "wrong")
    }
    println(output.joinToString(System.lineSeparator()))
}