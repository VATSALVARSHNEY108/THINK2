"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function FenwickTreeBasicsLesson() {
  return (
    <TreesLessonLab
      lessonId="fenwick-tree-basics"
      title="Fenwick Tree Basics"
      definition="Information about Fenwick Tree Basics."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
