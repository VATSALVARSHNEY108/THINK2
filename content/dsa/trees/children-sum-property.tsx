"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function ChildrenSumPropertyLesson() {
  return (
    <TreesLessonLab
      lessonId="children-sum-property"
      title="Children Sum Property"
      definition="Information about Children Sum Property."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
