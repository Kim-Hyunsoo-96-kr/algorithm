/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let nodeStack = [];
    let pointer = head;
    let postPointer = head;
    let count = 1;
    
    if(left === right) return head;
    
    if(left === 1) {
        postPointer = head;
        while(count <= right) {
            nodeStack.push(pointer)
            pointer = pointer.next;
            count++;
        }
        head = nodeStack.pop();
        postPointer = head;
        while(nodeStack.length !== 0) {
            postPointer.next = nodeStack.pop();
            postPointer = postPointer.next;
        }
        postPointer.next = pointer;
        return head;
    }
    
    else {
        pointer = pointer.next;
        count++;
        
        while(count < left) {
            pointer = pointer.next;
            postPointer = postPointer.next;
            count++;
        }
        while(count <= right) {
            nodeStack.push(pointer);
            pointer = pointer.next;
            count++;
        }
        while(nodeStack.length !== 0) {
            postPointer.next = nodeStack.pop();
            postPointer = postPointer.next;
        }
        postPointer.next = pointer;
        return head;
    }
};