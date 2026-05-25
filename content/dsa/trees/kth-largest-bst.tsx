"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function KthLargestBstLesson() {
  return (
    <TreesLessonLab
      lessonId="kth-largest-bst"
      title="Kth Largest Bst"
      definition="Information about Kth Largest Bst."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
