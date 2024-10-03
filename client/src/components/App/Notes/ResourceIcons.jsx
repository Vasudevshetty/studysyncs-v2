import TabsPopover from "./TabsPopover";

function ResourceIcons() {
  return (
    <div className="flex w-full p-2 gap-2 justify-between px-4 sm:px-8 resources">
      <h1 className="text-black dark:text-gray-300 text-xl flex items-center sm:text-3xl font-semibold">
        Notes
      </h1>
      <TabsPopover />
    </div>
  );
}

export default ResourceIcons;
