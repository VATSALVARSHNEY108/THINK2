"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BinaryLiftingLesson() {
  return (
    <TreesLessonLab
      lessonId="binary-lifting"
      title="Binary Lifting"
      definition="Information about Binary Lifting."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
