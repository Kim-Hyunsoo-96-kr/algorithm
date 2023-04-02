import java.io.*
import kotlin.collections.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n")
    val output = ArrayList<String>(0)
    input.forEachIndexed{idx, el ->
        if(idx != 0) {
            if(el.length > 1) output.add("${el[0]}${el[el.length-1]}")
            else output.add("${el[0]}${el[0]}")
        }
    }

    println(output.joinToString("\n"))
}