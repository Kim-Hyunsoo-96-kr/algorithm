import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator()).map { it.toInt() }

    if(input[0]+input[1]+input[2] != 180) println("Error")
    else if(input[0] == 60 && input[1] == 60 && input[2] == 60) println("Equilateral")
    else if(input[0] == input[1] || input[1] == input[2] || input[2] == input[0]) println("Isosceles")
    else println("Scalene")
}