import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1).map { it.toInt() }.sorted()
    var output = ""

    input.forEach {
        output += (it.toString() + System.lineSeparator())
    }
    println(output.trim())
}