/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let current = root;
    let data = [];
    
    function inOrderTraverse(node) {
        if(node.left) inOrderTraverse(node.left);
        data.push(node.val);
        if(node.right) inOrderTraverse(node.right);
    }
    inOrderTraverse(current);
    
    for(let i=0; i<data.length-1; i++) {
        if(data[i] >= data[i+1]) return false;
    }
    return true;
};