"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function RecoverBstLesson() {
  return (
    <TreesLessonLab
      lessonId="recover-bst"
      title="Recover Bst"
      definition="Information about Recover Bst."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Left subtree values < Root.', 'Right subtree values > Root.', 'Average time complexity is O(log N).']}
    />
  );
}
