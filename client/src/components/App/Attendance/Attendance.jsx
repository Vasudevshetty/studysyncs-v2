import DayStatus from "./DayStatus";
import History from "./History";
import VisualStatus from "./VisualStatus";

function Attendance() {
  return (
    <section className="flex flex-col items-center gap-2">
      <DayStatus />
      <div className="flex w-full gap-2 h-[500px] max-lg:h-[800px] flex-col-reverse lg:flex-row pb-2">
        <History />
        <VisualStatus />
      </div>
    </section>
  );
}

export default Attendance;
