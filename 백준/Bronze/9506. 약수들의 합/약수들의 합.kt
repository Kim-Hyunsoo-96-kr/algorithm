import java.io.*
import kotlin.math.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator()).map { it.toInt() }

    class Result {
        var acc = 0
        var list = mutableListOf<Int>()
    }
    var outputString = ""

    fun isPerfect(num:Int):Result {
        var result = Result()
        val lowList = mutableListOf<Int>()
        val highList = mutableListOf<Int>()

        for(i in 1..sqrt(num.toDouble()).toInt()) {
            if(num % i == 0) {
                if(num/i == i) {
                    result.acc += i
                    lowList.add(i)
                } else {
                    result.acc += i
                    result.acc += num/i
                    lowList.add(i)
                    highList.add(0, num/i)
                }
            }
        }
        result.acc -= num
        highList.removeLast()
        result.list.addAll(lowList)
        result.list.addAll(highList)
        return result
    }

    fun makeEquation(sum:Int, list:MutableList<Int>):String {
        var str = "$sum = "
        list.forEachIndexed { idx, el ->
            if(idx == 0) str += "$el "
            else str += "+ $el "
        }
        return str.trim()
    }

    for(i in 0 until input.size-1) {
        val tmpResult = isPerfect(input[i])
        if(tmpResult.acc == input[i]) {
            outputString += makeEquation(tmpResult.acc, tmpResult.list)
            outputString += System.lineSeparator()
        } else {
            outputString += "${input[i]} is NOT perfect."
            outputString += System.lineSeparator()
        }
    }
    println(outputString.trim())
}