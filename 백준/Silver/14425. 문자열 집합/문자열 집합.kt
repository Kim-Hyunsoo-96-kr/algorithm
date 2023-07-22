import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())
    val (n,m) = input[0].split(" ").map { it.toInt() }

    val list1 = input.subList(1,n+1).sorted()
    val list2 = input.subList(n+1, n+m+1)

    var output = 0

    list2.forEach{
        if(list1.binarySearch(it) >= 0) output++
    }

    println(output)
}