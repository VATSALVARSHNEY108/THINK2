"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function PriorityQueueLesson() {
  return (
    <TreesLessonLab
      lessonId="priority-queue"
      title="Priority Queue"
      definition="Information about Priority Queue."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
