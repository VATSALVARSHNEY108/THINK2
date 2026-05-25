"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function ChildNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="child-node"
      title="Child Node"
      definition="Information about Child Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
