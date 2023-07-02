import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().split(System.lineSeparator())
    val (N, M) = input[0].split(" ").map { it.toInt() }
    val board = input.slice(1..input.size-1).map { it.chunked(1) }

    var count = 64;

    val referenceBoard = Array(8){ row ->
        Array(8){ col ->
            if((col + row) % 2 == 0) return@Array "W"
            else return@Array "B"
        }
    }

    fun checkBoard(rowOffset:Int, colOffset:Int, arr1: List<List<String>>, arr2: Array<Array<String>>):Int {
        var result = 0
        for(row in 0..7) {
            for(col in 0..7) {
                if(arr1[row + rowOffset][col + colOffset] != arr2[row][col]) result++
            }
        }
        return result
    }
    for(row in 0..N-8) {
        for(col in 0..M-8) {
            var tmpCount = checkBoard(row, col, board, referenceBoard)
            if(tmpCount > 32) tmpCount = 64 - tmpCount
            if( count > tmpCount) count = tmpCount
        }
    }

    if( count >= N*M/2) println(N*M-count)
    else println(count)
}