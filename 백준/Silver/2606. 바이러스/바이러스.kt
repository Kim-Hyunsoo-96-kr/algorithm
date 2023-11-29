import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())
    val n = input[0].toInt()
    val pair = input[1].toInt()

    val computer = Array<Pair<Boolean, MutableList<Int>>>(n+1){Pair(false, mutableListOf())}
    for(i in 2 until 2+pair){
        val (a, b) = input[i].split(" ").map{ it.toInt() }
        computer[a].second.add(b)
        computer[b].second.add(a)
    }

    val queue = mutableListOf(1)
    val infect = mutableListOf<Int>()
    while(queue.isNotEmpty()){
        val com = queue.removeFirst()
        if(!infect.contains(com)){
            infect.add(com)
            queue.addAll(computer[com].second)
        }
    }
    println(infect.size-1)
}