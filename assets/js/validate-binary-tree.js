function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function isValidBST(root) {
    return isBSTUtil(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  }
  
  function isBSTUtil(node, min, max) {
    if (node === null) {
      return true;
    }
  
    if (node.val <= min || node.val >= max) {
      return false;
    }
  
    return isBSTUtil(node.left, min, node.val) && isBSTUtil(node.right, node.val, max);
  }
  
  function arrayToBST(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
  
    while (i < arr.length) {
      const current = queue.shift();
  
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }
  
      i++;
  
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]);
        queue.push(current.right);
      }
  
      i++;
    }
  
    return root;
  }
  
  function checkValidBST() {
    const inputTree = document.getElementById('inputTree').value;
  
    try {
      const rootArray = JSON.parse(inputTree);
      const root = arrayToBST(rootArray);
      const isValid = isValidBST(root);
  
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = isValid ? '<p style="color: green;">Valid BST!</p>' : '<p style="color: red;">Not a valid BST!</p>';
    } catch (error) {
      alert('Invalid input. Please enter a valid binary tree array.');
    }
  }
  