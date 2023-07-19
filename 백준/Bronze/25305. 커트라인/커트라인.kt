import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator())
    val (N, k) = input[0].split(" ").map { it.toInt() }
    val arr = input[1].split(" ").map { it.toInt() }.sortedDescending()

    println(arr[k-1])
}
