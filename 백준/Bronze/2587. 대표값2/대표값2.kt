import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).map { it.toInt() }.sorted()

    val mean = input.reduce{acc, i -> acc + i } / input.size
    val center = input[2]

    println(mean)
    println(center)
}
