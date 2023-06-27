import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())

    var output = ""

    input.forEach { el ->
        val (a, b) = el.split(" ").map{it.toInt()}
        if(a == 0 && b == 0) output = output.trim()
        else if( b % a == 0) output += "factor" + System.lineSeparator()
        else if( a % b == 0) output += "multiple" + System.lineSeparator()
        else output += "neither" + System.lineSeparator()
    }

    println(output)
}