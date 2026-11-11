/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    maxDiameter=0;
    diameterOfBinaryTree(root) {

        if(root===null){
            return 0;
        }

        let leftSubtree = this.height(root.left);
        let rightSubtree = this.height(root.right);



        this.maxDiameter=Math.max(this.maxDiameter,leftSubtree+rightSubtree);

        this.diameterOfBinaryTree(root.left);
        this.diameterOfBinaryTree(root.right);

        return this.maxDiameter;
    }

    height(root){
        if(root===null){
            return 0;
        }

        let left = 1+this.height(root.left);
        let right = 1+this.height(root.right);

        if(left<right){
            return right;
        }
        else{
            return left;
        }
    }
}
