"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RightViewLesson() {
  return (
    <TreesLessonLab
      lessonId="right-view"
      title="Right View"
      definition="Information about Right View."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
