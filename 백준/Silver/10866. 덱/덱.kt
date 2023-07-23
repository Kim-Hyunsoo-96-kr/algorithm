import java.io.*
import java.util.LinkedList

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator()).drop(1)

    val deque = LinkedList<String>()
    val output = LinkedList<String>()

    input.forEach{
        val tmp = it.split(" ")
        when(tmp[0]) {
            "push_front" -> deque.addFirst(tmp[1])
            "push_back" -> deque.add(tmp[1])
            "pop_front" -> output.add(if(deque.isEmpty()) "-1" else deque.removeFirst())
            "pop_back" -> output.add(if(deque.isEmpty()) "-1" else deque.removeLast())
            "size" -> output.add(deque.size.toString())
            "empty" -> output.add(if(deque.isEmpty())"1" else "0")
            "front" -> output.add(if(deque.isEmpty())"-1" else deque.first)
            "back" -> output.add(if(deque.isEmpty())"-1" else deque.last)
        }
    }

    println(output.joinToString(System.lineSeparator()))
}