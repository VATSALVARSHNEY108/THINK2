"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SubtreeLesson() {
  return (
    <TreesLessonLab
      lessonId="subtree"
      title="Subtree"
      definition="Information about Subtree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
