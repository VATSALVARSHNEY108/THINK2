"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LcpUsingTrieLesson() {
  return (
    <TreesLessonLab
      lessonId="lcp-using-trie"
      title="Lcp Using Trie"
      definition="Information about Lcp Using Trie."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
