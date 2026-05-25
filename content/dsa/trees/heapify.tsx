"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function HeapifyLesson() {
  return (
    <TreesLessonLab
      lessonId="heapify"
      title="Heapify"
      definition="A Heap is a special Tree-based data structure in which the tree is a complete binary tree."
      timeComplexity="O(log N)"
      spaceComplexity="O(H)"
      keyPoints={['Max-Heap: Root is maximum.', 'Min-Heap: Root is minimum.', 'Used in Priority Queues and Heap Sort.']}
    />
  );
}
