import { SidebarMediumLists } from "@/static/Json";
import { HomeIcon, ShortCreateIcon } from "./icons";

export const SidebarMedium = () => {
  return (
    <div className="w-full">
      {SidebarMediumLists.map((v, i) => (
        <div
          key={i}
          className="hover:bg-zinc-800 cursor-pointer flex-col rounded-lg flex w-14 h-20 items-center justify-center"
        >
          {v.icon}
          <p style={{ fontSize: 9, fontWeight: "bold" }}>{v.title}</p>
        </div>
      ))}
    </div>
  );
};
