import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n")
    val (n,m) = input[0].split(" ").map{it.toInt()}
    val baskets = Array<Int>(n){it+1}
    for(i in 1..m) {
        val (i,j,k) = input[i].split(" ").map{it.toInt()}
        rotate(i,j,k,baskets)
    }
    println(baskets.joinToString(" "))
}

fun rotate(begin:Int, end:Int, mid:Int, arr:Array<Int>) {
    val tmp = arrayListOf<Int>()
    var idx = mid-1;
    var i = 0;
    while(idx < end) {
        tmp.add(arr[idx])
        idx++
    }
    idx = begin-1;
    while(idx < mid-1) {
        tmp.add(arr[idx])
        idx++
    }
    tmp.forEach {
        arr[begin-1 + i] = it
        i++
    }
}