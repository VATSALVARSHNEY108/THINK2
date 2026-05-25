"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PerfectBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="perfect-binary-tree"
      title="Perfect Binary Tree"
      definition="Information about Perfect Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
