"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LeafNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="leaf-node"
      title="Leaf Node"
      definition="Information about Leaf Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
