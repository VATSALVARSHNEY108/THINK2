"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="binary-tree"
      title="Binary Tree"
      definition="Information about Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
