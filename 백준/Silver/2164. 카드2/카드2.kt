import java.io.*
import java.util.LinkedList

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().toInt()
    val list = LinkedList<Int>()
    for(i in 1..input) list.add(i)

    while(list.size > 1) {
        list.removeFirst()
        list.add(list.removeFirst())
    }
    println(list[0])
}