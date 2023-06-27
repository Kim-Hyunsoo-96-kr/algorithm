import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().toInt()

    var point = 2

    for(i in 0 until input) {
        point = point * 2 -1
    }
    println(point * point)
}