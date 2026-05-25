"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function IdenticalTreesLesson() {
  return (
    <TreesLessonLab
      lessonId="identical-trees"
      title="Identical Trees"
      definition="Information about Identical Trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
