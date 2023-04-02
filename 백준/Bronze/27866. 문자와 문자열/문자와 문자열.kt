import java.io.*
import kotlin.collections.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (input, idx) = bf.readText().trim().split("\n")

    println(input[idx.toInt()-1])
}