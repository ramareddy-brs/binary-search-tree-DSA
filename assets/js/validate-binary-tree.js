function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function isValidBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) {
        return true; // An empty tree is a valid BST
    }

    // Check if the current node's value is within the valid range
    if (root.val <= min || root.val >= max) {
        return false;
    }

    // Recursively check the left and right subtrees
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const result = isValidBST(root);
console.log(result);