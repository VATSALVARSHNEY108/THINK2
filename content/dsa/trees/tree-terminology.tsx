"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function TreeTerminologyLesson() {
  return (
    <TreesLessonLab
      lessonId="tree-terminology"
      title="Tree Terminology"
      definition="Information about Tree Terminology."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
