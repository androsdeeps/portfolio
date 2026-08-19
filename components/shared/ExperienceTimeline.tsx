import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { TimelineList, TimelineItem } from "@/components/shared/Timeline";

export function ExperienceTimeline() {
  return (
    <TimelineList>
      {experience.map((item, index) => (
        <TimelineItem
          key={item.id}
          index={index}
          icon={Briefcase}
          accent="primary"
          title={item.position}
          org={item.company}
          meta={`${item.location} · ${item.employmentType}`}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          items={item.responsibilities}
        >
          <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </TimelineItem>
      ))}
    </TimelineList>
  );
}
