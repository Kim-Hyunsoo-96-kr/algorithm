import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (_, a, _, b) = bf.readText().trim().split(System.lineSeparator())

    val map = mutableMapOf<String, Int>()
    val list1 = a.split(" ")
    val list2 = b.split(" ")

    val result = Array<Int>(list2.size){0}

    list1.forEach {
        if(map[it] == null) map[it] = 1
        else map[it] = map[it]!! + 1
    }

    for(i in list2.indices) {
        result[i] = map[list2[i]]?:0
    }

    println(result.joinToString(" "))
}