"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function HeavyLightDecompositionLesson() {
  return (
    <TreesLessonLab
      lessonId="heavy-light-decomposition"
      title="Heavy Light Decomposition"
      definition="Information about Heavy Light Decomposition."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
