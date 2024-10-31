import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { generateSlug, subjects } from "@/constants/user";
import NotesOptions from "./NotesOptions";
import { FaAngleLeft } from "react-icons/fa";
import SubjectList from "./SubjectList";
import Subject from "./Subject";

function Notes() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Update state from URL when the component loads
  useEffect(() => {
    const subjectSlug = searchParams.get("subject");
    const chapterSlug = searchParams.get("chapter");

    // Find the selected subject based on the slug
    const subject = subjects.find((s) => s.slug === subjectSlug);
    if (subject) {
      setSelectedSubject(subject);

      // If a chapter slug is available, find the corresponding chapter
      const chapter =
        subject.chapters.find((c) => generateSlug(c.name) === chapterSlug) ||
        subject.chapters[0];
      setSelectedChapter(chapter);
    }
  }, [searchParams]);

  // Update URL when selectedSubject or selectedChapter changes
  useEffect(() => {
    const params = {};
    if (selectedSubject) {
      params.subject = selectedSubject.slug;
      if (selectedChapter) {
        params.chapter = generateSlug(selectedChapter.name);
      }
      setSearchParams(params);
    }
  }, [selectedSubject, selectedChapter, setSearchParams]);

  return (
    <section className="pb-2">
      <div className="flex gap-2 max-lg:flex-col resources transition-all h-[calc(100vh-4.5rem)]">
        {/* Subjects Sidebar */}
        <div
          className={`flex flex-col gap-2 bg-white dark:bg-app-secondary rounded-xl items-center transition-all duration-700 ${
            selectedSubject
              ? "lg:w-2/5 xl:w-1/4 max-lg:h-1/4 lg:h-full"
              : "lg:w-3/5 xl:w-3/4 lg:h-full h-[450px]"
          }`}
        >
          <div className="w-full flex dark:bg-app-tertiary rounded-t-xl items-center text-gray-300 text-center gap-2 text-sm sm:text-2xl p-2">
            {selectedSubject && (
              <span
                className="cursor-pointer hover:bg-gray-300 rounded-full p-1 hover:text-gray-800"
                onClick={() => {
                  setSelectedSubject(null);
                  setSelectedChapter(null);
                  setSearchParams({}); // Clear the URL params to reset to /app/notes
                }}
              >
                <FaAngleLeft />
              </span>
            )}
            <span className="p-2">Subjects</span>
          </div>
          <SubjectList
            subjects={subjects}
            selectedSubject={selectedSubject}
            setSelectedSubject={(subject) => {
              setSelectedSubject(subject);
              setSelectedChapter(subject.chapters[0]);
            }}
          />
        </div>
        {/* Details Section */}
        <div
          className={`transition-transform duration-700 rounded-xl ${
            selectedSubject
              ? "lg:w-3/5 xl:w-3/4 max-lg:h-3/4 lg:h-full bg-white dark:bg-app-secondary"
              : "lg:block xl:w-1/4 lg:w-2/5 h-[650px] lg:h-full"
          }`}
        >
          {selectedSubject ? (
            <Subject
              subject={selectedSubject}
              setSelectedChapter={setSelectedChapter}
              selectedChapter={selectedChapter}
            />
          ) : (
            <NotesOptions />
          )}
        </div>
      </div>
    </section>
  );
}

export default Notes;
