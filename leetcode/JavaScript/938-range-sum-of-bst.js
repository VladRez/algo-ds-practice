var rangeSumBST = function(root, L, R) {
    let total = 0;
    let tree = [root]
    
    while(tree.length){
        let node = tree.pop()
            if (node.val >= L && node.val <= R){
                total += node.val;
            }
        
        if (node.left !== null) tree.push(node.left)
        if (node.right !== null) tree.push(node.right)
    }
    
    return total
};