"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function FullBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="full-binary-tree"
      title="Full Binary Tree"
      definition="Information about Full Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
