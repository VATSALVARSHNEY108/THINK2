"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PrefixSumQueriesLesson() {
  return (
    <TreesLessonLab
      lessonId="prefix-sum-queries"
      title="Prefix Sum Queries"
      definition="Information about Prefix Sum Queries."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
