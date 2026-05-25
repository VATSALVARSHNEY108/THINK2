"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LevelOfNodeLesson() {
  return (
    <TreesLessonLab
      lessonId="level-of-node"
      title="Level Of Node"
      definition="Information about Level Of Node."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
