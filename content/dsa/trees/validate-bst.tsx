"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function ValidateBstLesson() {
  return (
    <TreesLessonLab
      lessonId="validate-bst"
      title="Validate Bst"
      definition="Information about Validate Bst."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
