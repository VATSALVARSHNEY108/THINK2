"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BottomViewLesson() {
  return (
    <TreesLessonLab
      lessonId="bottom-view"
      title="Bottom View"
      definition="Information about Bottom View."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
