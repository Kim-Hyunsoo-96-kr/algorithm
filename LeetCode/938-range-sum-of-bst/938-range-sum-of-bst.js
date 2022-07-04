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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = 0;
    let helper = function(root, low, high) {
        if(root !== null) {
            console.log(root.val);
            if(root.val <= high && root.val >= low) {
                result += root.val;
                helper(root.left, low, high);
                helper(root.right, low, high);
            } else if(root.val < low) {
                helper(root.right, low, high);
            } else {
                helper(root.left, low, high);
            }
        }
    }
    helper(root, low, high);
    return result;
};