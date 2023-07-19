import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().toInt()
    var count = 0
    var ans = ""
    for(i in 1..Int.MAX_VALUE) {
        if(i.toString().contains("666")) count++
        if(count == input) {
            ans = i.toString()
            break
        }
    }
    println(ans)
}
