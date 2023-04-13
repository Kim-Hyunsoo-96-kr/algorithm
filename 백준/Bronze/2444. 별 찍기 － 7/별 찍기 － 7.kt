import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().toInt()
    var output = ""
    for(i1 in 1 until 2*input) {
        var str = "";
        if(i1 <= input) {
            for(i2 in i1 until input) {
                str += " "
            }
            for(i2 in 1 until 2*i1) {
                str += "*"
            }
            output += "${str}\n"
        } else {
            for(i2 in input until i1) {
                str += " "
            }
            for(i2 in 1 until 2*(2*input-i1)) {
                str += "*"
            }
            output += "${str}\n"
        }
    }
    println(output)
}