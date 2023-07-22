import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(" ").map { it.toInt() }

    val result = input.fold(0){ acc, i -> acc + i*i }

    println(result % 10)
}