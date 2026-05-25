"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function UpdateQueriesLesson() {
  return (
    <TreesLessonLab
      lessonId="update-queries"
      title="Update Queries"
      definition="Information about Update Queries."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
