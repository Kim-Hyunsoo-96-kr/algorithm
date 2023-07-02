import java.io.*
import kotlin.math.pow

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
//    val bf = FileReader("data.txt")
    val (num1, num2) = bf.readText().trim().split(" ")
    val numArr = num1.chunked(1)

    var order = 0.0
    if(num2.toIntOrNull() == null) {
        order = num2.toCharArray()[0].code - 'A'.code + 10.0
    } else order = num2.toDouble()

    var result = 0.0
    var power = 0
    for(i in numArr.size-1 downTo 0) {
        if(numArr[i].toIntOrNull() == null) {
            result += (numArr[i].toCharArray()[0].code - 'A'.code + 10) * order.pow(power)
        } else result += numArr[i].toDouble() * order.pow(power)
        power++
    }

    println(result.toInt())
}