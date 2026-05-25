"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function CompleteBinaryTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="complete-binary-tree"
      title="Complete Binary Tree"
      definition="Information about Complete Binary Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
