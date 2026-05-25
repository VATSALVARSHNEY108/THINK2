"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function MergeKSortedArraysLesson() {
  return (
    <TreesLessonLab
      lessonId="merge-k-sorted-arrays"
      title="Merge K Sorted Arrays"
      definition="Information about Merge K Sorted Arrays."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
