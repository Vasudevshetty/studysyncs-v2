function NotesOptions() {
  return (
    <div className="flex gap-4 flex-col items-center h-full">
      <Option className="from-yellow-400 to-yellow-600"></Option>
      <Option className="from-green-400 to-green-600"></Option>
      <Option className="from-indigo-400 to-indigo-600"></Option>
    </div>
  );
}

function Option({ className, children }) {
  return (
    <div className={`h-full w-full bg-gradient-to-r rounded-xl ${className}`}>
      {children}
    </div>
  );
}

export default NotesOptions;
