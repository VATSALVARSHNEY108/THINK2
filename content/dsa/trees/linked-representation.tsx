"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LinkedRepresentationLesson() {
  return (
    <TreesLessonLab
      lessonId="linked-representation"
      title="Linked Representation"
      definition="Information about Linked Representation."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
