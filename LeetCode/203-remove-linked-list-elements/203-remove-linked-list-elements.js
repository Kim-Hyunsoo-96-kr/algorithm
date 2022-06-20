/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let pointer = head;
    let postPointer = null;

  while (pointer !== null) {
    if (pointer.val === val) {
      if (pointer === head) {
        head = head.next;
        pointer = head;
      } else {
        pointer = pointer.next;
        postPointer.next = pointer;
      }
    } else {
      if (pointer === head) {
        postPointer = head;
        pointer = pointer.next;
      } else {
        postPointer = postPointer.next;
        pointer = pointer.next;
      }
    }
  }
    return head;
};

function deleteNode(ll, val) {
    
}