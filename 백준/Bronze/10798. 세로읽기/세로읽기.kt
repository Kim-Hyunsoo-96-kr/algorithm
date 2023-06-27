import java.io.*
import java.util.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n")
    var output = ""

    for( i in 0 until 15) {
        for( j in input.indices) {
            if(i < input[j].length) output += input[j][i]
        }
    }
    println(output.trim())
}