const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => Number(el));

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    } 
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    
    pop() {
        let popNode = this.head;
        if(!this.head) return null;
        
        if(this.head === this.tail) {
            this.tail = null
        }
        this.head = this.head.next;
        this.size--;
        return popNode.value;
    }
    
    top() {
        if(!this.head) return null;
        else return this.head.value;
    }
}

let stack = new Stack();

for (let i = 1; i < input.length; i++) {
  if (stack.size === 0) stack.push(input[i]);
  else {
    if (input[i] === 0) stack.pop();
    else stack.push(input[i]);
  }
}
let sum = 0;
while (stack.size !== 0) {
  sum += stack.pop();
}
console.log(sum);
