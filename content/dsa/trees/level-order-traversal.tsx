"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LevelOrderTraversalLesson() {
  return (
    <TreesLessonLab
      lessonId="level-order-traversal"
      title="Level Order Traversal"
      definition="Tree traversal involves visiting all the nodes in a tree in a specific order."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Used to search or process every node.', 'Recursive or iterative implementations.', 'Order determines the processing sequence.']}
    />
  );
}
