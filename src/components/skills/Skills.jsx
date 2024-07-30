import { Card, CardBody, CardHeader, Image, Tooltip } from "@nextui-org/react";
import imageSkill from "../../utils/skill/Skill.js";
export function Skill() {
  return (
    <div>
      <div className="text-5xl">Skills</div>
      <div className="">
        {imageSkill.map((items, i) => (
          <Card isHoverable shadow="lg" key={i} className="w-full ">
            <CardHeader className="font-serif text-2xl">
              {items.title}
            </CardHeader>
            <CardBody className="grid grid-cols-12 grid-flow-col gap-5 content-start items-center py-8">
              {items.items.map((item, i) => (
                <Tooltip key={i} content={item.name}>
                  <Image
                    radius="none"
                    src={`https://svgl.app/library/${item.icon}.svg`}
                    alt={`${item.name} icon`}
                    className="object-contain w-10 h-10 "
                  />
                </Tooltip>
              ))}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
