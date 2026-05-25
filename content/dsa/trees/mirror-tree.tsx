"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function MirrorTreeLesson() {
  return (
    <TreesLessonLab
      lessonId="mirror-tree"
      title="Mirror Tree"
      definition="Information about Mirror Tree."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
