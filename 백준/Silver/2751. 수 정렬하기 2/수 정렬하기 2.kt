import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1).map { it.toInt() }.sorted()

    println(input.joinToString(System.lineSeparator()))
}