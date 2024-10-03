import TableHeader from "./TableHeader";
import Subjects from "./Subjects";
import EditPool from "./EditPool";
import { useState } from "react";
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { user } from "@/constants/user";

function SortablePeriod({ period }) {
  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef,
    isDragging,
  } = useSortable({ id: period.id });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`p-1 rounded-full max-sm:text-xs h-12 min-w-12 sm:h-16 sm:min-w-16 flex items-center justify-center ${
        period.color
      } text-white ${isDragging ? "opacity-50" : ""}`}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
    >
      <span className="uppercase font-bold">{period.slug}</span>
    </div>
  );
}

function Timetable() {
  const [isEditing, setIsEditing] = useState(false);
  const [activePeriod, setActivePeriod] = useState(null);
  const [currentTimetable, setCurrentTimetable] = useState(user.timetable);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event) => {
    if (!isEditing) return;

    const { active } = event;
    const { id } = active;

    // Check if dragging a subject or a period
    const period = Object.values(currentTimetable.weekdays)
      .flat()
      .find((p) => p.id === id);

    setActivePeriod(period);
  };

  const handleDragEnd = (event) => {
    if (!isEditing) return;

    const { active, over } = event;

    if (!over) return;

    if (over.id === "trash" && activePeriod) {
      // Remove period from the timetable
      const updatedTimetable = { ...currentTimetable };
      Object.keys(updatedTimetable.weekdays).forEach((day) => {
        updatedTimetable.weekdays[day] = updatedTimetable.weekdays[day].filter(
          (p) => p.id !== active.id
        );
      });
      setCurrentTimetable(updatedTimetable);
    }

    setActivePeriod(null);
  };

  return (
    <div
      className="bg-gray-200 dark:bg-gray-800 flex flex-col p-2"
      style={{ touchAction: "none" }}
    >
      <TableHeader
        {...currentTimetable}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <DndContext
        collisionDetection={closestCorners}
        sensors={isEditing ? sensors : undefined}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="rounded-xl flex max-lg:flex-col gap-2 overflow-hidden">
          <div className="flex-1 p-2 flex flex-col gap-2 lg:w-[60%] xl:w-[70%]">
            {Object.keys(currentTimetable.weekdays).map((day, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-400 pl-2 rounded-xl flex gap-3 max-sm:h-20 h-24 items-center"
              >
                <div className="p-1 bg-blue-500 min-w-12 h-12 text-white capitalize flex items-center justify-center rounded-xl">
                  {day}
                </div>
                <div className="flex-1 flex gap-2 border-l overflow-x-hidden hover:overflow-x-auto px-2 h-full items-center">
                  {isEditing ? (
                    <SortableContext
                      items={currentTimetable.weekdays[day].map((i) => i.id)}
                    >
                      {currentTimetable.weekdays[day].map((period) => (
                        <SortablePeriod key={period.id} period={period} />
                      ))}
                    </SortableContext>
                  ) : (
                    currentTimetable.weekdays[day].map((period) => (
                      <div
                        key={period.id}
                        className={`p-1 rounded-full max-sm:text-xs h-12 min-w-12 sm:h-16 sm:min-w-16 flex items-center justify-center ${period.color} text-white`}
                      >
                        <span className="uppercase font-bold">
                          {period.slug}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
          {!isEditing ? <Subjects /> : <EditPool setIsEditing={setIsEditing} />}
        </div>

        {/* Drag Overlay for Visual Feedback */}
        <DragOverlay>
          {activePeriod ? (
            <div
              className={`p-1 rounded-full max-sm:text-xs h-12 min-w-12 sm:h-16 sm:min-w-16 flex items-center justify-center ${activePeriod.color} text-white`}
            >
              <span className="uppercase font-bold">{activePeriod.slug}</span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default Timetable;
