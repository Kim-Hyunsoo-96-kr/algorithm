import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (x, y, w, h) = bf.readText().trim().split(" ").map { it.toInt() }

    println(Math.min(Math.min(x,y), Math.min(w-x, h-y)))
}