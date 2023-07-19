import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1).sortedWith(Comparator { o1, o2 ->
        val tmp1 = o1.split(" ")
        val tmp2 = o2.split(" ")
        return@Comparator when {
            tmp1[0].toInt() > tmp2[0].toInt() -> 1
            tmp1[0].toInt() < tmp2[0].toInt() -> -1
            else -> 0
        }
    })
    println(input.joinToString(System.lineSeparator()))
}