"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SiblingNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="sibling-node"
      title="Sibling Node"
      definition="Information about Sibling Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
