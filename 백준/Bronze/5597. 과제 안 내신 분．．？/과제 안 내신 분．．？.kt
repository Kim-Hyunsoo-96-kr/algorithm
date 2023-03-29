import java.io.*
import java.util.*
import kotlin.collections.*

fun main() {
    val arr = Array<String?>(30) { "x" }
    val output = ArrayList<Int>()
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n").map { it.toInt() }
    input.forEach { it ->
        arr[it-1] = "o"
    }
    arr.forEachIndexed { idx, s ->
        if(s == "x") output.add(idx+1)
    }
    println(output.joinToString("\n"))
}
