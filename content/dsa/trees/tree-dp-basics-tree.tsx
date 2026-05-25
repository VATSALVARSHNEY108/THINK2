"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function TreeDpBasicsTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="tree-dp-basics-tree"
      title="Tree Dp Basics Tree"
      definition="Information about Tree Dp Basics Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
