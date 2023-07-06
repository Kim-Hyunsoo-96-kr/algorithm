import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())

    val xPoint = mutableMapOf<String, Int>()
    val yPoint = mutableMapOf<String, Int>()

    input.forEach{
        val (x, y) = it.split(" ")
        if(xPoint[x] == null) xPoint[x] = 1
        else xPoint[x] = xPoint[x]!! + 1
        if(yPoint[y] == null) yPoint[y] = 1
        else yPoint[y] = yPoint[y]!! + 1
    }

    var output = ""
    xPoint.forEach { if(it.value == 1) output += it.key }
    yPoint.forEach { if(it.value == 1) output += " ${it.key}" }

    println(output)
}