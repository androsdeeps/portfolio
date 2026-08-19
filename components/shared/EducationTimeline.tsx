import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { TimelineList, TimelineItem } from "@/components/shared/Timeline";

export function EducationTimeline() {
  return (
    <TimelineList>
      {education.map((item, index) => (
        <TimelineItem
          key={item.id}
          index={index}
          icon={GraduationCap}
          accent="accent"
          title={item.degree}
          org={item.institution}
          meta={item.location}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          items={item.achievements}
        />
      ))}
    </TimelineList>
  );
}
