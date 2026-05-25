"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function ParentNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="parent-node"
      title="Parent Node"
      definition="Information about Parent Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
