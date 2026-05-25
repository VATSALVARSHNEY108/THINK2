"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function CeilInBstLesson() {
  return (
    <TreesLessonLab
      lessonId="ceil-in-bst"
      title="Ceil In Bst"
      definition="Information about Ceil In Bst."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
