"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SumOfNodesLesson() {
  return (
    <TreesLessonLab
      lessonId="sum-of-nodes"
      title="Sum Of Nodes"
      definition="Information about Sum Of Nodes."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
