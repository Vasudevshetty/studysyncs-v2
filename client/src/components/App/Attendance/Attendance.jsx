import DayStatus from "./DayStatus";
import History from "./History";
import VisualStatus from "./VisualStatus";

function Attendance() {
  return (
    <section className="flex flex-col items-center">
      <DayStatus />
      <div className="flex w-full p-2 gap-2 h-[500px] max-lg:h-[800px] flex-col-reverse lg:flex-row">
        <History />
        <VisualStatus />
      </div>
    </section>
  );
}

export default Attendance;
