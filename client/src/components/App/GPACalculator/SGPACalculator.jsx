import { useState } from "react";
import { subjects } from "@/constants/user";
import SpringModal from "../../App/SpringModal";
import { Link } from "react-router-dom";

const gradeToPoints = {
  S: { points: 10, color: "bg-green-600" },
  A: { points: 9, color: "bg-yellow-500" },
  B: { points: 8, color: "bg-blue-500" },
  C: { points: 6, color: "bg-purple-500" },
  D: { points: 4, color: "bg-orange-500" },
  F: { points: 0, color: "bg-red-500" },
};

function SCCalculator() {
  const totalSubjects = Object.keys(subjects).length;

  const [selectedGrades, setSelectedGrades] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [calculatedSGPA, setCalculatedSGPA] = useState(null);

  const handleGradeChange = (subjectKey, grade) => {
    setSelectedGrades((prev) => ({
      ...prev,
      [subjectKey]: grade,
    }));
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    Object.keys(subjects).forEach((key) => {
      const subject = subjects[key];
      const grade = selectedGrades[key];
      const gradePoint = gradeToPoints[grade]?.points || 0;

      totalCredits += subject.credit;
      totalGradePoints += gradePoint * subject.credit;
    });

    const sgpa = (totalGradePoints / totalCredits).toFixed(2);
    setCalculatedSGPA(sgpa);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl sm:text-4xl text-center text-gray-900 dark:text-white font-bold tracking-wide mb-4 sm:mb-0">
          Calculate Your SGPA
        </h2>
        <Link
          className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-xl"
          to="/app/calculate-gpa/cgpa"
        >
          Go to CGPA Calculator
        </Link>
      </div>

      <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <div className="mb-6">
          <p className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200">
            Total number of subjects: {totalSubjects}
          </p>
          <p className="text-sm sm:text-md mt-2 text-gray-500 dark:text-gray-400">
            Select your grade for each subject below to calculate your SGPA.
          </p>
        </div>

        {/* Subject Grades */}
        <div className="flex flex-wrap -mx-2 sm:-mx-4">
          {Object.keys(subjects).map((key) => {
            const subject = subjects[key];
            const selectedGrade = selectedGrades[key];

            return (
              <div key={subject.slug} className="w-full px-2 sm:px-4 mb-4">
                <div className="p-4 rounded-lg border border-gray-300 dark:border-gray-600">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {subject.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Credits: {subject.credit}
                  </p>

                  <div className="mt-4 flex w-full justify-between gap-1 sm:gap-2">
                    {Object.keys(gradeToPoints).map((grade) => (
                      <div
                        key={grade}
                        onClick={() => handleGradeChange(key, grade)}
                        className={`cursor-pointer p-1 sm:p-3 border text-white text-xl rounded-lg text-center w-full transition-all duration-300 ${
                          !(selectedGrade === grade)
                            ? gradeToPoints[grade].color + " opacity-80"
                            : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={calculateSGPA}
            className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Calculate SGPA
          </button>
        </div>

        <SpringModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          variant="form"
        >
          <div className="text-center">
            <p className="text-2xl font-semibold">
              SGPA: <span className="text-green-600">{calculatedSGPA}</span>
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </SpringModal>
      </div>
    </div>
  );
}

export default SCCalculator;
