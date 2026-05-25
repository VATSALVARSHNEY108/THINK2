"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function MinDepthLesson() {
  return (
    <TreesLessonLab
      lessonId="min-depth"
      title="Min Depth"
      definition="Information about Min Depth."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
