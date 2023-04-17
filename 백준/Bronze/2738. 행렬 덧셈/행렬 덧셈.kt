import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n")
    val (n, m) = input[0].split(" ").map{it.toInt()}
    val mat1 = arrayListOf<Array<Int>>()
    val mat2 = arrayListOf<Array<Int>>()
    var output:String = ""

    input.forEachIndexed{idx, el ->
        if(idx > 0 && idx <= n) {
            val arr1 = input[idx].split(" ").map{it.toInt()}
            val arr2 = input[idx+n].split(" ").map{it.toInt()}
            val arr = Array<Int>(m){ arr1[it] + arr2[it] }
            output += "${arr.joinToString(" ")}\n"
        }
    }
    println(output.trim())
}
