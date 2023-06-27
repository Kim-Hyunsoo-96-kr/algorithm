import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val coin = mapOf("quarter" to 25, "dime" to 10, "nickel" to 5, "penny" to 1)

    var output = ""

    val input = bf.readText().trim().split(System.lineSeparator())
    for(i in 1 until input.size) {
        var rest = input[i].toInt()
        val tmpArr = arrayListOf<Int>()
        tmpArr.add(rest / coin["quarter"]!!)
        rest %= coin["quarter"]!!
        tmpArr.add(rest / coin["dime"]!!)
        rest %= coin["dime"]!!
        tmpArr.add(rest / coin["nickel"]!!)
        rest %= coin["nickel"]!!
        tmpArr.add(rest)
        output += (tmpArr.joinToString(" ") + System.lineSeparator())
    }
    println(output.trim())
}