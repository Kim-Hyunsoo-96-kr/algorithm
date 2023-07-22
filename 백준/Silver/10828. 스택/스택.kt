import java.io.*
import java.util.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator()).drop(1)

    val stack = Stack<String>()
    val output = LinkedList<String>()

    input.forEach {
        val instruction = it.split(" ")
        when(instruction[0]) {
            "push" -> stack.push(instruction[1])
            "top" -> output.add(if(stack.empty()) "-1" else stack[stack.size-1])
            "size" -> output.add(stack.size.toString())
            "pop" -> output.add(if(stack.empty()) "-1" else stack.pop())
            "empty" -> output.add(if(stack.empty())"1" else "0")
            else -> ""
        }
    }
    println(output.joinToString(System.lineSeparator()))
}