import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n")
    var totalScore = 0.0
    var totalQ = 0.0
    val scoreMap = mapOf(
        "A+" to 4.5,
        "A0" to 4.0,
        "B+" to 3.5,
        "B0" to 3.0,
        "C+" to 2.5,
        "C0" to 2.0,
        "D+" to 1.5,
        "D0" to 1.0,
        "F" to 0.0,
        "P" to 0.0
    )

    input.forEach{ el ->
        val (_, q, score) = el.split(" ")
        val doubleQ = q.toDouble()
        if(score != "P") {
            totalQ += doubleQ
            totalScore += scoreMap[score]!! * doubleQ
        }
    }

    println(totalScore/totalQ)
}