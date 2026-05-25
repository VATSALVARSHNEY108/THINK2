"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function MergeTwoBstsLesson() {
  return (
    <TreesLessonLab
      lessonId="merge-two-bsts"
      title="Merge Two Bsts"
      definition="Information about Merge Two Bsts."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
