function NotesOptions() {
  return (
    <div className="flex gap-2 flex-col h-full">
      <Option className="p-2 from-yellow-400 to-yellow-600">
        <h1 className="text-2xl text-center text-white">Request notes</h1>
      </Option>
      <Option className="from-green-400 to-green-600"></Option>
      <Option className="from-indigo-400 to-indigo-600">
        <h1 className="p-2 text-2xl text-white">Get question papers</h1>
        <p>Quick Links</p>
      </Option>
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
