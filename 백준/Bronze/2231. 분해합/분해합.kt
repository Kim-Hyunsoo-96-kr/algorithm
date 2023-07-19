import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim()
    var ans = 0

    for(i in 1 until input.toInt()) {
        val tmp = i.toString().split("").drop(1).dropLast(1)
        if( input.toInt() == i + tmp.fold(0){acc, s -> acc.toInt() + s.toInt() }) {
            ans = i
            break
        }
    }
    println(ans)
}