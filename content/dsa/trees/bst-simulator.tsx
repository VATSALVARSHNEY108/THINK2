"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BstSimulatorLesson() {
  return (
    <TreesLessonLab
      lessonId="bst-simulator"
      title="Bst Simulator"
      definition="Interactive visual lab exploring Bst Simulator algorithms, node balance states, and C++ logic execution."
      timeComplexity="O(log N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
