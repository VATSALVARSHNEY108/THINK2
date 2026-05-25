"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function IterativeTraversalsLesson() {
  return (
    <TreesLessonLab
      lessonId="iterative-traversals"
      title="Iterative Traversals"
      definition="Tree traversal involves visiting all the nodes in a tree in a specific order."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Used to search or process every node.', 'Recursive or iterative implementations.', 'Order determines the processing sequence.']}
    />
  );
}
