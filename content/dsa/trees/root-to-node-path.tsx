"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RootToNodePathLesson() {
  return (
    <TreesLessonLab
      lessonId="root-to-node-path"
      title="Root To Node Path"
      definition="Information about Root To Node Path."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
