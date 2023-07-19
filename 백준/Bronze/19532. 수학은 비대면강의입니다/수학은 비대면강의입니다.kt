import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(" ").map { it.toInt() }
    val (a,b,c,d,e) = input
    val f = input[5]

    val x = (c*e - b*f) / (a*e - b*d)
    val y = (c*d - a*f) / (b*d - a*e)

    println("$x $y")
}
