"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function AncestorDescendantLesson() {
  return (
    <TreesLessonLab
      lessonId="ancestor-descendant"
      title="Ancestor Descendant"
      definition="Information about Ancestor Descendant."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
