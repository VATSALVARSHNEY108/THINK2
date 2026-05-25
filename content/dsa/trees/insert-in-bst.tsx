"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function InsertInBstLesson() {
  return (
    <TreesLessonLab
      lessonId="insert-in-bst"
      title="Insert In Bst"
      definition="Insertion in a BST adds a new node while maintaining the ordering property."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
