import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n")

    var max:Int = -1
    var maxrow:Int = 0
    var maxcol:Int = 0

    input.forEachIndexed{ row, el ->
        el.split(" ").map{ it.toInt() }.forEachIndexed { col, it ->
            if(it > max) {
                max = it
                maxcol = col+1
                maxrow = row+1
            }
        }
    }
    val output = "$max\n$maxrow $maxcol"
    println(output)
}
