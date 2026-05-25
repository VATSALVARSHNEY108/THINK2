"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function FloorInBstLesson() {
  return (
    <TreesLessonLab
      lessonId="floor-in-bst"
      title="Floor In Bst"
      definition="Information about Floor In Bst."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
