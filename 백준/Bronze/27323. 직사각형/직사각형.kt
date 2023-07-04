import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (num1, num2) = bf.readText().trim().split(System.lineSeparator()).map { it.toInt() }

    println(num1 * num2)
}