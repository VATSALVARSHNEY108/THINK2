"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function InternalNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="internal-node"
      title="Internal Node"
      definition="Information about Internal Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
