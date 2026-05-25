"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function CountNodesLesson() {
  return (
    <TreesLessonLab
      lessonId="count-nodes"
      title="Count Nodes"
      definition="Information about Count Nodes."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
