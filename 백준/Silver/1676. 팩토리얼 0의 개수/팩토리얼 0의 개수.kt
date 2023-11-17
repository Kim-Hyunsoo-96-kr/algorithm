import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().toInt()
    var result = 0

    for ( i in 1..input){
        var tmp = i
        while(tmp % 5 == 0){
            result++
            tmp /= 5
        }
    }
    println(result)
}