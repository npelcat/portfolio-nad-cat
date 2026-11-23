import { skillCategories } from "@/content/skills";
import Section from "@/components/ui/Section";

export default function Skills() {
  return (
    <Section id="skills" title="Compétences">
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        {skillCategories.map((category) => (
          <div key={category.title} className="border-t border-line pt-6">
            <h3 className="font-medium">{category.title}</h3>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-fg-muted">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
