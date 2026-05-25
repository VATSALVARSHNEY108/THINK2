// app/curriculum/page.tsx
import { getSubjectsFromFS } from "@/lib/content-registry";
import CurriculumCards from "./CurriculumCards";

type SubjectInfo = { id: string; name: string; description?: string };

export default async function CurriculumHome() {
  const subjectsData = await getSubjectsFromFS();
  const subjects: SubjectInfo[] = subjectsData.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
  }));

  return <CurriculumCards subjects={subjects} />;
}
