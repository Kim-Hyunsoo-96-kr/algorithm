function solution(s){
    let stack = new Stack();
    
    for(let i=0; i<s.length; i++) {
        if(stack.size === 0) {
            stack.push(s[i]);
        }
        else {
            if(s[i] === ')' && stack.top() === '(') stack.pop();
            else stack.push(s[i]);
        }
    }
    
    if(stack.size === 0) return true;
    else return false;

    return answer;
}

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
