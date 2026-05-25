"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function KthSmallestBstLesson() {
  return (
    <TreesLessonLab
      lessonId="kth-smallest-bst"
      title="Kth Smallest Bst"
      definition="Information about Kth Smallest Bst."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
