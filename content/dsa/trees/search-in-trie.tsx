"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SearchInTrieLesson() {
  return (
    <TreesLessonLab
      lessonId="search-in-trie"
      title="Search In Trie"
      definition="Information about Search In Trie."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
