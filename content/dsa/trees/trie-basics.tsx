"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function TrieBasicsLesson() {
  return (
    <TreesLessonLab
      lessonId="trie-basics"
      title="Trie Basics"
      definition="Information about Trie Basics."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
