"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function MaxPathSumLesson() {
  return (
    <TreesLessonLab
      lessonId="max-path-sum"
      title="Max Path Sum"
      definition="Information about Max Path Sum."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
