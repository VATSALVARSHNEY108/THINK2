"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function WordDictionaryLesson() {
  return (
    <TreesLessonLab
      lessonId="word-dictionary"
      title="Word Dictionary"
      definition="Information about Word Dictionary."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
