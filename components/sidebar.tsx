import { SidebaLists1, SidebaLists2, SidebarMediumLists } from "@/static/Json";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";

export const Sidebar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full mt-2">
      {SidebaLists1.map((v, i) => (
        <div
          key={i}
          // onClick={() => setActive(v.id)}
          className={`hover:bg-zinc-800 ${active == v.id && "bg-zinc-800"} gap-4 px-2 py-1 items-center text-left cursor-pointer w-full rounded-lg flex`}
        >
          {v.icon}
          <p
            style={{
              fontSize: 14,
              fontWeight: active == v.id ? "bold" : "normal",
            }}
          >
            {v.title}
          </p>
        </div>
      ))}

      <div className="py-2">
        <Divider />
      </div>

      {SidebaLists2.map((v, i) => (
        <div
          // onClick={() => setActive(v.id)}
          key={i}
          className={`hover:bg-zinc-800 ${active == v.id && "bg-zinc-800"} gap-4 px-2 py-1 items-center text-left cursor-pointer w-full rounded-lg flex`}
        >
          {v.icon}
          <p
            style={{
              fontSize: 14,
              fontWeight: active == v.id ? "bold" : "normal",
            }}
          >
            {v.title}
          </p>
        </div>
      ))}
    </div>
  );
};
