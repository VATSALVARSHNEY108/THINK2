"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function LcaBstLesson() {
  return (
    <TreesLessonLab
      lessonId="lca-bst"
      title="Lca Bst"
      definition="Information about Lca Bst."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
