import java.io.*
import java.util.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1)

    val queue = LinkedList<String>()
    val output = LinkedList<String>()

    input.forEach {
        val instruction = it.split(" ")
        when(instruction[0]) {
            "push" -> queue.add(instruction[1])
            "pop" -> output.add(if(queue.isEmpty()) "-1" else queue.pop())
            "size" -> output.add(queue.size.toString())
            "empty" -> output.add(if(queue.isEmpty())"1" else "0")
            "front" -> output.add(if(queue.isEmpty()) "-1" else queue[0])
            "back" -> output.add(if(queue.isEmpty()) "-1" else queue[queue.size-1])
            else -> ""
        }
    }
    println(output.joinToString(System.lineSeparator()))
}