"use client";

import TreesLessonLab from "../../../components/TreesLessonLab";

export default function SerializeDeserializeLesson() {
  return (
    <TreesLessonLab
      lessonId="serialize-deserialize"
      title="Serialize Deserialize"
      definition="Information about Serialize Deserialize."
      timeComplexity="O(N)"
      spaceComplexity="O(H)"
      keyPoints={['Process nodes in a specific order.', 'Handle base cases (null nodes).', 'Consider tree balance for performance.']}
    />
  );
}
