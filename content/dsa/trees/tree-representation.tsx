"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function TreeRepresentationLesson() {
  return (
    <TreesLessonLab
      lessonId="tree-representation"
      title="Tree Representation"
      definition="Information about Tree Representation."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
