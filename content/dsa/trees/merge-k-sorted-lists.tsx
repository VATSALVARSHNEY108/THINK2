"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function MergeKSortedListsLesson() {
  return (
    <TreesLessonLab
      lessonId="merge-k-sorted-lists"
      title="Merge K Sorted Lists"
      definition="Information about Merge K Sorted Lists."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
