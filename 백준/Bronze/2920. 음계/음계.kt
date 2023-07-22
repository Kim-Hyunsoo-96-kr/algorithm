import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(" ").map { it.toInt() }

    fun isAscending(list: List<Int>):Boolean {
        for(i in 0..7) {
            if(list[i] != i+1) return false
        }
        return true
    }

    fun isDescending(list: List<Int>):Boolean {
        for(i in 0..7) {
            if(list[i] != 8-i) return false
        }
        return true
    }
    if(isAscending(input)) println("ascending")
    else if(isDescending(input)) println("descending")
    else println("mixed")
}