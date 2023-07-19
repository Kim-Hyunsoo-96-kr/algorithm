import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1).distinct().sortedWith(Comparator { o1, o2 ->

        return@Comparator when {
            o1.length > o2.length -> 1
            o1.length < o2.length -> -1
            o1 > o2 -> 1
            o1 < o2 -> -1
            else -> 0
        }
    })
    println(input.joinToString(System.lineSeparator()))
}