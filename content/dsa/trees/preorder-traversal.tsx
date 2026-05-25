"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PreorderTraversalLesson() {
  return (
    <TreesLessonLab
      lessonId="preorder-traversal"
      title="Preorder Traversal"
      definition="Preorder traversal visits the root node first, then the left subtree, and finally the right subtree. Useful for copying trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Used to search or process every node.', 'Recursive or iterative implementations.', 'Order determines the processing sequence.']}
    />
  );
}
