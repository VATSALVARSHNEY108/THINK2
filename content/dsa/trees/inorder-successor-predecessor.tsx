"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function InorderSuccessorPredecessorLesson() {
  return (
    <TreesLessonLab
      lessonId="inorder-successor-predecessor"
      title="Inorder Successor Predecessor"
      definition="Information about Inorder Successor Predecessor."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
