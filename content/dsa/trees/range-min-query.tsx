"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RangeMinQueryLesson() {
  return (
    <TreesLessonLab
      lessonId="range-min-query"
      title="Range Min Query"
      definition="Information about Range Min Query."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
