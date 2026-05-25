"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function InorderTraversalLesson() {
  return (
    <TreesLessonLab
      lessonId="inorder-traversal"
      title="Inorder Traversal"
      definition="Inorder traversal visits the left subtree, then the root, then the right subtree. In a BST, this yields nodes in non-decreasing order."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Used to search or process every node.', 'Recursive or iterative implementations.', 'Order determines the processing sequence.']}
    />
  );
}
