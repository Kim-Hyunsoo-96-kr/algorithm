import java.io.*
import kotlin.math.min

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var (a, b) = bf.readText().trim().split(" ").map { it.toInt() }

    fun gcd(a:Int, b:Int):Int {
        var a = a
        var b = b
        while(!(a % b == 0 || b % a == 0)) {
            if(a > b) a = a % b else b = b % a
        }
        return min(a,b)
    }
    val gcd = gcd(a,b)
    val lcm = a * b / gcd

    println("$gcd${System.lineSeparator()}$lcm")
}