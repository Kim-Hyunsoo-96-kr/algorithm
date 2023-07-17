import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim()

    val(a,b,c) = input.split(" ").map { it.toInt() }

    val check = { a:Int,b:Int,c:Int ->
        var result = true
        result = (Math.abs(a-b) < c) && result
        result = (Math.abs(b-c) < a) && result
        result = (Math.abs(c-a) < b) && result
        result
    }

    if(check(a,b,c)) println(a+b+c)
    else println(Math.min(Math.min(a+b, b+c),c+a)*2 -1)
}
