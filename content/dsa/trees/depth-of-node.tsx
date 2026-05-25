"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function DepthOfNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="depth-of-node"
      title="Depth Of Node"
      definition="Information about Depth Of Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
