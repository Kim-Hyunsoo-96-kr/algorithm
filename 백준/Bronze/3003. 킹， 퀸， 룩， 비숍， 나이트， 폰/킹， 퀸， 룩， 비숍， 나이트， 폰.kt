import java.io.*

fun main() {
    val chess = arrayOf(1,1,2,2,2,8)
    val output = arrayListOf<Int>()
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(" ").map{it.toInt()}

    chess.forEachIndexed {idx, el ->
        output.add(el - input[idx])
    }
    println(output.joinToString(" "))
}