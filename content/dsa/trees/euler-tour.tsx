"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function EulerTourLesson() {
  return (
    <TreesLessonLab
      lessonId="euler-tour"
      title="Euler Tour"
      definition="Information about Euler Tour."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
