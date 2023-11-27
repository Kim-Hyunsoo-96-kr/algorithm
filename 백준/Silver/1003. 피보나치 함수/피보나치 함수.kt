import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator()).map{ it.toInt() }
    var out = ""
    val MAX = 40
    val zero = mutableListOf(1,0)
    val one = mutableListOf(0,1)

    for(i in 2..MAX){
        zero.add(zero[i-2] + zero[i-1])
        one.add(one[i-2] + one[i-1])
    }

    input.forEachIndexed{ idx, n ->
        if(idx == 0) return@forEachIndexed
        else out += ("${zero[n]} ${one[n]}" + System.lineSeparator())
    }
    println(out.trim())
}