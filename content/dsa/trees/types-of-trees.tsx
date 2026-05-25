"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function TypesOfTreesLesson() {
  return (
    <TreesLessonLab
      lessonId="types-of-trees"
      title="Types Of Trees"
      definition="Information about Types Of Trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
