import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim()
    val length = input.length
    val subSet = mutableSetOf<String>()

    for(subLength in 1..length) {
        var start = 0
        while(start + subLength <= length) {
            val tmp = input.substring(start until start + subLength)
            subSet.add(tmp)
            start++
        }
    }
    println(subSet.size)
}