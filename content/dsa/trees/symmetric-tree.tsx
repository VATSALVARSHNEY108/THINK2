"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SymmetricTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="symmetric-tree"
      title="Symmetric Tree"
      definition="Information about Symmetric Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
