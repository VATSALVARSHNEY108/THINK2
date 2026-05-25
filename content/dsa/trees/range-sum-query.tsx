"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RangeSumQueryLesson() {
  return (
    <TreesLessonLab
      lessonId="range-sum-query"
      title="Range Sum Query"
      definition="Information about Range Sum Query."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
