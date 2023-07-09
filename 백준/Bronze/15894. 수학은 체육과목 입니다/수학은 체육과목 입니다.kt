import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))

    val n = bf.readText().trim().toLong()

    println(4*n)
}