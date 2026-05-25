"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SegmentTreeBasicsLesson() {
  return (
    <TreesLessonLab
      lessonId="segment-tree-basics"
      title="Segment Tree Basics"
      definition="Information about Segment Tree Basics."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
