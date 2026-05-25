"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PrefixSearchLesson() {
  return (
    <TreesLessonLab
      lessonId="prefix-search"
      title="Prefix Search"
      definition="Information about Prefix Search."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
