"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function BstIteratorLesson() {
  return (
    <TreesLessonLab
      lessonId="bst-iterator"
      title="Bst Iterator"
      definition="Information about Bst Iterator."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
