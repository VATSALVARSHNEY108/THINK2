"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SkewedBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="skewed-binary-tree"
      title="Skewed Binary Tree"
      definition="Information about Skewed Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
