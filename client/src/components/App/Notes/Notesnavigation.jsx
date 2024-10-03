function Notesnavigation({ title }) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-xl sm:text-3xl text-black dark:text-white font-semibold">
        {title}
      </h1>
      <nav className="text-sm px-4"></nav>
    </div>
  );
}

export default Notesnavigation;
