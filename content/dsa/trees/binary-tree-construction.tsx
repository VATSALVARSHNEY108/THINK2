"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BinaryTreeConstructionLesson() {
  return (
    <TreesLessonLab
      lessonId="binary-tree-construction"
      title="Binary Tree Construction"
      definition="Information about Binary Tree Construction."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
