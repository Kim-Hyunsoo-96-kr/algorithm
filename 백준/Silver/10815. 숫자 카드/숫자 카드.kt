import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (n, list1Str, m, list2Str) = bf.readText().trim().split(System.lineSeparator())

    val output = Array(m.toInt()){0}
    val list1 = list1Str.split(" ").map { it.toInt() }.sorted()
    val list2 = list2Str.split(" ").map { it.toInt() }

    for(i in list2.indices) if(list1.binarySearch (list2[i]) >= 0) output[i] = 1

    println(output.joinToString(" "))
}