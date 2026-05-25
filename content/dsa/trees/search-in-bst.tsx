"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SearchInBstLesson() {
  return (
    <TreesLessonLab
      lessonId="search-in-bst"
      title="Search In Bst"
      definition="Searching in a BST takes advantage of the property that values are ordered, allowing for O(log N) search on average."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
