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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let data = [];
    let current = root;
    
    function inOrderTraverse(node) {
        if(node.left) inOrderTraverse(node.left);
        data.push(node.val);
        if(node.right) inOrderTraverse(node.right);
    }
    inOrderTraverse(current);
    
    let result = new TreeNode(data[0]);
    current = result;
    
    for(let i=1; i<data.length; i++) {
        let node = new TreeNode(data[i]);
        current.right = node;
        current = current.right;
    }
    return result;
};