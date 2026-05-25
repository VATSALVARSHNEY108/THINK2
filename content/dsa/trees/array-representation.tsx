"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function ArrayRepresentationLesson() {
  return (
    <TreesLessonLab
      lessonId="array-representation"
      title="Array Representation"
      definition="Information about Array Representation."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
