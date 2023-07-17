import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    var input = bf.readText().trim().split(System.lineSeparator())
    input = input.slice(0 until input.size-1)
    var output = ""

    val check = { a:Int,b:Int,c:Int ->
        var result = true
        result = (Math.abs(a-b) < c) && result
        result = (Math.abs(b-c) < a) && result
        result = (Math.abs(c-a) < b) && result
        result
    }

    input.forEach {
        val(a,b,c) = it.split(" ").map { it.toInt() }
        if(check(a,b,c)) {
            if(a == b && b == c && c == a) output += "Equilateral" + System.lineSeparator()
            else if(a == b || b == c || c == a) output += "Isosceles" + System.lineSeparator()
            else output += "Scalene" + System.lineSeparator()
        } else output += "Invalid" + System.lineSeparator()
    }

    println(output.trim())
}