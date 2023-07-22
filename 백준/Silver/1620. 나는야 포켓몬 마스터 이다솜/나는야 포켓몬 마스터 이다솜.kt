import java.io.*

fun main() {
    val bf = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val input = bf.readText().trim().split(System.lineSeparator())
    val (n,m) = input[0].split(" ").map { it.toInt() }

    val poket = input.subList(1, n+1)
    val map = mutableMapOf<String, Int>()
    poket.forEachIndexed{ index, s -> map[s] = index+1 }
    val list = input.subList(n+1, n+m+1)

    var output = mutableListOf<String>()
    list.forEach{
        if(it.toIntOrNull() == null) {
            output.add(map[it]?.toString()?:"")
//            bw.write(map[it]?.toString()+System.lineSeparator())
        } else
            output.add(poket[it.toInt()-1])
//            bw.write(poket[it.toInt()-1]+System.lineSeparator())
    }
    println(output.joinToString(System.lineSeparator()))
}