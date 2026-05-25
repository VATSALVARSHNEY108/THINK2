"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PathInTreesLesson() {
  return (
    <TreesLessonLab
      lessonId="path-in-trees"
      title="Path In Trees"
      definition="Information about Path In Trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
