import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1).sortedWith(Comparator { o1, o2 ->
        val tmp1 = o1.split(" ").map { it.toInt() }
        val tmp2 = o2.split(" ").map { it.toInt() }

        return@Comparator when {
            tmp1[1] > tmp2[1] -> 1
            tmp1[1] < tmp2[1] -> -1
            tmp1[0] > tmp2[0] -> 1
            tmp1[0] < tmp2[0] -> -1
            else -> 0
        }
    })
    println(input.joinToString(System.lineSeparator()))
}