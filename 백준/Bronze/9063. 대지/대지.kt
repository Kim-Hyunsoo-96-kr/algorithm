import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())

    var minX = 10001
    var maxX = -10001
    var minY = 10001
    var maxY = -10001

    for(i in 1 until input.size) {
            val(x,y) = input[i].split(" ").map { it.toInt() }
            if(minX > x) minX = x
            if(maxX < x) maxX = x
            if(minY > y) minY = y
            if(maxY < y) maxY = y
    }

    println((maxX - minX) * (maxY - minY))
}