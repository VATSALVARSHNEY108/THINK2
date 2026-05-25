"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BstBasicsLesson() {
  return (
    <TreesLessonLab
      lessonId="bst-basics"
      title="Bst Basics"
      definition="Information about Bst Basics."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
