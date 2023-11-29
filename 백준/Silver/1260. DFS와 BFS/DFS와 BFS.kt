import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val input = bf.readText().trim().split(System.lineSeparator())
    val (node, edge, start) = input[0].split(" ").map{ it.toInt() }

    val graph = Array<MutableList<Int>>(node+1){ mutableListOf() }

    for(i in 1 until 1+edge){
        val(node1, node2) = input[i].split(" ").map{ it.toInt() }
        graph[node1].add(node2)
        graph[node2].add(node1)
    }
    graph.forEach{ it.sort() }
    
    fun dfs(graph:Array<MutableList<Int>>, start:Int){
        val stack = mutableListOf(start)
        val res = mutableListOf<Int>()
        while(stack.isNotEmpty()){
            val tmp = stack.removeFirst()
            if(!res.contains(tmp)){
                res.add(tmp)
                stack.addAll(0, graph[tmp])
            }
        }
        println(res.joinToString(" "))
    }
    fun bfs(graph:Array<MutableList<Int>>, start:Int){
        val queue = mutableListOf(start)
        val res = mutableListOf<Int>()
        while(queue.isNotEmpty()){
            val tmp = queue.removeFirst()
            if(!res.contains(tmp)){
                res.add(tmp)
                queue.addAll(graph[tmp])
            }
        }
        println(res.joinToString(" "))
    }

    dfs(graph, start)
    bfs(graph, start)
}