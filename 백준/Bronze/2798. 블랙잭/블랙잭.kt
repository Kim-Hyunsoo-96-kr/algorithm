import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator())

    val (n, m) = input[0].split(" ").map { it.toInt() }
    val list = input[1].split(" ").map { it.toInt() }

    var sum = 0

    for(i in 0 until n-2) {
        for(j in i+1 until n-1) {
            for(k in j+1 until n) {
                val tmp = list[i] + list[j] + list[k]
                if( (tmp <= m) && (tmp > sum) ) sum = tmp
            }
        }
    }

    println(sum)
}