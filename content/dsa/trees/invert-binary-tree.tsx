"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function InvertBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="invert-binary-tree"
      title="Invert Binary Tree"
      definition="Information about Invert Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
