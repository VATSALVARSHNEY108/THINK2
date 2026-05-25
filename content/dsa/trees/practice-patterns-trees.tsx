"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PracticePatternsTreesLesson() {
  return (
    <TreesLessonLab
      lessonId="practice-patterns-trees"
      title="Practice Patterns Trees"
      definition="Information about Practice Patterns Trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
