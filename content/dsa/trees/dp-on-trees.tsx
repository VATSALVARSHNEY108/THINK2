"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function DpOnTreesLesson() {
  return (
    <TreesLessonLab
      lessonId="dp-on-trees"
      title="Dp On Trees"
      definition="Information about Dp On Trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
