import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val (n,k) = bf.readText().trim().split(" ").map { it.toInt() }

    fun factorial(a:Int):Int {
        var result = 1
        for(i in 1..a) result *= i
        return result
    }

    println(factorial(n) / (factorial(k) * factorial(n-k)))
}