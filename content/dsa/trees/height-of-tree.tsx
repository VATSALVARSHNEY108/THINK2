"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function HeightOfTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="height-of-tree"
      title="Height Of Tree"
      definition="Information about Height Of Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
