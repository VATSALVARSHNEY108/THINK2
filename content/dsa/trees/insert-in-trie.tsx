"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function InsertInTrieLesson() {
  return (
    <TreesLessonLab
      lessonId="insert-in-trie"
      title="Insert In Trie"
      definition="Information about Insert In Trie."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
