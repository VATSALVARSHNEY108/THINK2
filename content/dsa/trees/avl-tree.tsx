"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function AvlTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="avl-tree"
      title="Avl Tree"
      definition="Avl Tree is a self-balancing binary search tree."
      timeComplexity="O(log N)"
      spaceComplexity="O(H)"
      keyPoints={['Maintains balance during insertions and deletions.', 'Guarantees logarithmic height.', 'Prevents worst-case O(N) performance.']}
    />
  );
}
