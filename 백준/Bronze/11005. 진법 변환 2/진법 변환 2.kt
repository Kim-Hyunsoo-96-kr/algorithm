import java.io.*
import kotlin.math.pow

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (num1, num2) = bf.readText().trim().split(" ").map { it.toInt() }

    val numStack = mutableListOf<Int>()
    var result = ""

    var num = num1
    while(num != 0) {
        numStack.add(num % num2)
        num /= num2
    }

    fun convert(input:Int):String {
        val offset = 'A'.code - 10
        if(input < 10) return input.toString()
        else return (input + offset).toChar().toString()
    }
    for(i in numStack.size-1 downTo 0) {
        result += convert(numStack[i])
    }
    println(result)
}