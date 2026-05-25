"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LcaBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="lca-binary-tree"
      title="Lca Binary Tree"
      definition="Information about Lca Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
