"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RootToLeafPathsLesson() {
  return (
    <TreesLessonLab
      lessonId="root-to-leaf-paths"
      title="Root To Leaf Paths"
      definition="Information about Root To Leaf Paths."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
