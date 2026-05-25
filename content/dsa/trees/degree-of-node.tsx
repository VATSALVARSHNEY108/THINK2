"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function DegreeOfNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="degree-of-node"
      title="Degree Of Node"
      definition="Information about Degree Of Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
