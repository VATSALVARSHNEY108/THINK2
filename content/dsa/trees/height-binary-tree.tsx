"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function HeightBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="height-binary-tree"
      title="Height Binary Tree"
      definition="Information about Height Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
