class Leaf {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var tree = new Leaf("10");
tree.left = new Leaf("5");
tree.right = new Leaf("15");
tree.left.left = new Leaf("3");
tree.left.right = new Leaf("7");
tree.right.left = new Leaf("12");
tree.right.right = new Leaf("18");
tree.left.left.left = new Leaf("1");
tree.left.left.right = new Leaf("4");
tree.left.right.right = new Leaf("9");
tree.right.right.left = new Leaf("17");

const breadth = [];
const depth = [];

function depthSearch(node) {
  if (node !== null) {
    depth.push(node.data);
    depthSearch(node.left);
    depthSearch(node.right);
  }
}

function breadthSearch(node) {
  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    const current = queue.shift();
    breadth.push(current.data);

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
}

depthSearch(tree);
breadthSearch(tree);
