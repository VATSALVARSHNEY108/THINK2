"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function DsuTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="dsu-tree"
      title="Dsu Tree"
      definition="Information about Dsu Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
