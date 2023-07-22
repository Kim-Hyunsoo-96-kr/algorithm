import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator()).dropLast(1)
    val output = mutableListOf<String>()

    input.forEach {
        output.add(if(it == it.reversed()) "yes" else "no")
    }
    println(output.joinToString(System.lineSeparator()))
}