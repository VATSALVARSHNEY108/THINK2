"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LeftViewLesson() {
  return (
    <TreesLessonLab
      lessonId="left-view"
      title="Left View"
      definition="Information about Left View."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
