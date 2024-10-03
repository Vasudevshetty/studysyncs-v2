import TabsPopover from "../TabsPopover";
import Notesnavigation from "./Notesnavigation";

function ResourceIcons() {
  return (
    <div className="flex w-full p-2 gap-2 justify-between pr-4 sm:pr-8 resources">
      <Notesnavigation title={"Semester 4"} />
      <TabsPopover />
    </div>
  );
}

export default ResourceIcons;
