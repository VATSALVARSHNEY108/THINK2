"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function IntroductionToTreesLesson() {
  return (
    <TreesLessonLab
      lessonId="introduction-to-trees"
      title="Introduction To Trees"
      definition="Information about Introduction To Trees."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
