"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function MaxDepthLesson() {
  return (
    <TreesLessonLab
      lessonId="max-depth"
      title="Max Depth"
      definition="Information about Max Depth."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
