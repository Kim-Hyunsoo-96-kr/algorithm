import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (_, a, b) = bf.readText().trim().split(System.lineSeparator())

    val set1 = a.split(" ").toHashSet()
    val set2 = b.split(" ").toHashSet()


    val set12 = set1 - set2
    val set21 = set2 - set1

    println(set12.size + set21.size)
}