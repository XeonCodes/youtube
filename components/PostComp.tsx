import { Avatar } from "@nextui-org/avatar";
import { MoreIcon } from "./icons";

export const VideoComp = () => {
  return (
    <div className=" w-full flex flex-col gap-2">
      {/* Thumbnail */}
      <div className="bg-blue-900">
        <p>Thumbnail</p>
      </div>
      {/* Post Bottom */}
      <div className="flex gap-3">
        {/* Creator's Pic */}
        <Avatar className=" w-10" src="https://i.pravatar.cc/300" />
        <div>
          {/* Video title */}
          <h1 className=" text-medium font-medium leading-5">
            Donald Trump speaks for the 1st time on the assassination attempt
          </h1>
          {/* Creator's name */}
          <div>
            <p></p>
            <div></div>
          </div>
          {/* View & Time */}
          <p></p>
        </div>
        {/* <MoreIcon /> */}
      </div>
    </div>
  );
};

// Font name: Roboto, Arial, sans-serif
// Font size: 16px
// Font weight: 500
// Line height: 22px
// Font color: rgb(241, 241, 241)
