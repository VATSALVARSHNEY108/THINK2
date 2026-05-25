"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RootNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="root-node"
      title="Root Node"
      definition="Information about Root Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
