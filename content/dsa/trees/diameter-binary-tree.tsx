"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function DiameterBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="diameter-binary-tree"
      title="Diameter Binary Tree"
      definition="Information about Diameter Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
