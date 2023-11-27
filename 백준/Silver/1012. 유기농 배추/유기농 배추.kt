import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())
    var n = 0
    val point = mutableListOf<List<Int>>()
    val mapInfo = mutableListOf<List<Int>>()
    var pointIdx = 0
    input.forEach{ str ->
        val list = str.trim().split(" ").map{ it.toInt() }
        when(list.size){
            1 -> {n = list[0]}
            2 -> {point.add(list)}
            else -> {mapInfo.add(list)}
        }
    }

    fun oneToZero(map:Array<Array<Int>>, x:Int, y:Int, maxX:Int, maxY:Int){
        val queue = mutableListOf(Pair(x,y))
        while(queue.isNotEmpty()){
            val (x, y) = queue.removeFirst()
            if(x-1 >= 0 && map[y][x-1] == 1) {map[y][x-1] = 0; queue.add(Pair(x-1, y))}
            if(y+1 < maxY && map[y+1][x] == 1) {map[y+1][x] = 0; queue.add(Pair(x, y+1))}
            if(x+1 < maxX && map[y][x+1] == 1) {map[y][x+1] = 0; queue.add(Pair(x+1, y))}
            if(y-1 >= 0 && map[y-1][x] == 1) {map[y-1][x] = 0; queue.add(Pair(x, y-1))}
        }
    }

    for(i in 0 until n){
        val map = Array(mapInfo[i][1]){ Array(mapInfo[i][0]){0} }
        for(j in 0 until mapInfo[i][2]){
            val (x,y) = point[pointIdx]
            map[y][x] = 1
            pointIdx++
        }
        var count = 0

        for(pointX in 0 until mapInfo[i][0]){
            for(pointY in 0 until mapInfo[i][1]){
                if(map[pointY][pointX] == 1){
                    count++
                    oneToZero(map, pointX, pointY, mapInfo[i][0], mapInfo[i][1])
                }
            }
        }
        println(count)
    }
}