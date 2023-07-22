import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())
    val n = input[0].toInt()
    val log = input.drop(1)

    val map = mutableMapOf<String,Boolean>()

    log.forEach{
        val (name, state) = it.split(" ")
        if(map[name] == null) map[name] = true
        else map.remove(name)
    }

    println(map.keys.sortedDescending().joinToString(System.lineSeparator()))
}