import java.io.*
import java.util.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (n,k) = bf.readText().trim().split(" ").map { it.toInt() }

    val list = LinkedList<Int>()
    for(i in 1..n) list.add(i)
    val output = LinkedList<Int>()

    while(list.size != 0) {
        for(i in 1 until k) list.add(list.removeFirst())
        output.add(list.removeFirst())
    }

    println(output.joinToString(", ","<",">"))
}