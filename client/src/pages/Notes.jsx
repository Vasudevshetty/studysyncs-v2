import Sidebar from "@/components/Sidebar";

function Notes() {
  return (
    <section className="flex w-full h-full">
      <Sidebar />
      <div className="w-[80vw] bg-blue-100">notes</div>
    </section>
  );
}

export default Notes;
