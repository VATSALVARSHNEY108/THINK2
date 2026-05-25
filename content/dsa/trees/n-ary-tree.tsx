"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function NAryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="n-ary-tree"
      title="N Ary Tree"
      definition="Information about N Ary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
