"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RedBlackTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="red-black-tree"
      title="Red Black Tree"
      definition="Red Black Tree is a self-balancing binary search tree."
      timeComplexity="O(log N)"
      spaceComplexity="O(H)"
      keyPoints={['Maintains balance during insertions and deletions.', 'Guarantees logarithmic height.', 'Prevents worst-case O(N) performance.']}
    />
  );
}
