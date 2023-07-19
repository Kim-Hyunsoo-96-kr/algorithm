import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split("").drop(1).dropLast(1).sortedDescending()
    println(input.joinToString(""))
}