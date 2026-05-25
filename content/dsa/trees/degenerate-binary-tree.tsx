"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function DegenerateBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="degenerate-binary-tree"
      title="Degenerate Binary Tree"
      definition="Information about Degenerate Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
