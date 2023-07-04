import java.io.*
import kotlin.math.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(" ").map { it.toInt() }
    val (num, index) = input

    var lowList = mutableListOf<Int>()
    var highList = mutableListOf<Int>()

    for(i in 1..sqrt(num.toDouble()).toInt()) {
        if(num % i == 0) {
            if(num/i == i) {
                lowList.add(i)
            } else {
                lowList.add(i)
                highList.add(0, num/i)
            }
        }
    }
    val list = mutableListOf<Int>()
    list.addAll(lowList)
    list.addAll(highList)

    if(index > list.size) println(0)
    else println(list[index-1])
}