"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BalancedBinaryTreeCheckLesson() {
  return (
    <TreesLessonLab
      lessonId="balanced-binary-tree-check"
      title="Balanced Binary Tree Check"
      definition="Information about Balanced Binary Tree Check."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
