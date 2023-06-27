import java.io.*

fun main() {
    val paper = Array(100){ Array(100){false} }

    fun fill(x:Int, y:Int, arr:Array<Array<Boolean>>){
        for(i in x .. x+9) {
            for(j in 99-y-9 .. 99-y) {
                arr[j][i] = true
            }
        }
    }

    fun count(arr:Array<Array<Boolean>>):Int {
        var count = 0
        for(i in 0 until 100) {
            for(j in 0 until 100) {
                if(arr[i][j]) count++
            }
        }
        return count
    }

    val bf = BufferedReader(InputStreamReader(System.`in`))

    val input = bf.readText().trim().split(System.lineSeparator())

    for(i in 1 until input.size) {
        val (x, y) = input[i].split(" ")
        fill(x.toInt(), y.toInt(), paper)
    }
    println(count(paper))
}