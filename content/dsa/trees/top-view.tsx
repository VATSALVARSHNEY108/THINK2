"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function TopViewLesson() {
  return (
    <TreesLessonLab
      lessonId="top-view"
      title="Top View"
      definition="Information about Top View."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
