import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText()
    val length = input.length-1
    var isPalindrome:Boolean = true
    
    for(i in 0..length/2) {
        if(input[i] != input[length-1-i]) {
            isPalindrome = false
            break
        }
    }
    println(if(isPalindrome) 1 else 0)
}
