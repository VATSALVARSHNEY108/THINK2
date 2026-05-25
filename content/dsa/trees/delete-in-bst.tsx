"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function DeleteInBstLesson() {
  return (
    <TreesLessonLab
      lessonId="delete-in-bst"
      title="Delete In Bst"
      definition="Deletion in a BST involves removing a node and re-linking the tree to maintain its property."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
