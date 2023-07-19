import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val bw = System.out.bufferedWriter()
    var n = bf.readLine().toInt()
    val countArr = IntArray(10001){0}

    for(i in 1..n) {
        countArr[bf.readLine().toInt()]++
    }
    bf.close()
//    val sb = StringBuilder("")

    for(i in 1 until countArr.size) {
        for(j in 1..countArr[i]) {
//            sb.append("$i").append(System.lineSeparator())
            bw.write("$i${System.lineSeparator()}")
        }
    }
    bw.flush()
    bw.close()
}