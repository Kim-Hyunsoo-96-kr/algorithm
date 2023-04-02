import java.io.*
import kotlin.collections.*

lateinit var arr: Array<Int>

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split("\n")
    input.forEachIndexed {idx, el ->
        if(idx == 0) {
            val(m, n) = el.split(" ").map{ it.toInt() }
            arr = Array(m){ it+1 }
        }
        else {
            val(idx1, idx2) = el.split(" ").map{ it.toInt() }
            reverse(arr, idx1-1, idx2-1)
        }
    }
    println(arr.joinToString(" "))
}

fun reverse(arr:Array<Int>, idx1:Int, idx2: Int) {
    val tmpArr = Array<Int?>(idx2-idx1+1){null}

    for(i in idx1..idx2 step 1) {
        tmpArr[idx2-i] = arr[i]
    }
    for(i in idx1..idx2 step 1) {
        arr[i] = tmpArr[i-idx1]!!
    }
}