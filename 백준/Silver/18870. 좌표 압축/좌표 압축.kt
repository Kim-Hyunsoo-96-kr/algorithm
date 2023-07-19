import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1)[0].split(" ").map { it.toInt() }
    val sortArr = input.distinct().sorted()
    val output = Array(input.size){0}

    for(i in input.indices) {
        output[i] = sortArr.binarySearch(input[i])
    }
    println(output.joinToString(" "))
}