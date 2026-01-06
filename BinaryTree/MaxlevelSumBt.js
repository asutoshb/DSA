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
 * @return {number}
 */
var maxLevelSum = function(root) {
    if(root == null) return -1;
    let maxSum = -Infinity;
    let maxLevel = 1;
    let level = 1;
    let q = [root];
    while(q.length) {
        let len = q.length;
        let sum = 0;
        for(let i = 0; i<len; i++) {
            let node = q.shift();
            sum += node.val;
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        if(sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
        level++;
    }
    return maxLevel;
};