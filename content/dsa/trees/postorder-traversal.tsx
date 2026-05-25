"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PostorderTraversalLesson() {
  return (
    <TreesLessonLab
      lessonId="postorder-traversal"
      title="Postorder Traversal"
      definition="Postorder traversal visits the left subtree, then the right subtree, and finally the root node. Useful for deleting trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Used to search or process every node.', 'Recursive or iterative implementations.', 'Order determines the processing sequence.']}
    />
  );
}
