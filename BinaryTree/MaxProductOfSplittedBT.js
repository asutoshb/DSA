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
var maxProduct = function(root) {
    // BigInt()
    // Number 2^53-1
    // 1233231231231231231313n
    let MOD = 1000000007n;
    if(root == null) return 0n;
    function totalSum(root) {
        if(root == null) return 0n;
        let leftSum = totalSum(root.left);
        let rightSum = totalSum(root.right);
        return BigInt(root.val) + leftSum + rightSum;
    }
    let SUM = totalSum(root);
    let max = 0n;
    function find(root) {
        if(root == null) return 0n;
        let leftSum = find(root.left);
        let rightSum = find(root.right);
        let subTreeSum = BigInt(root.val) + leftSum + rightSum;
        let remSubTreeSum = BigInt(SUM - subTreeSum);
        
        max = max > (subTreeSum * remSubTreeSum) ? max : (remSubTreeSum*subTreeSum);
        return subTreeSum;     
    }
    find(root);
    return Number(max % MOD);
};