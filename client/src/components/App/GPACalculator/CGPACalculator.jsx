import { useState } from "react";
import { Link } from "react-router-dom";

function CGPACalculator() {
  const [semesters, setSemesters] = useState([{ sgpa: "", credits: "" }]);

  // Add another semester input field
  const addSemester = () => {
    setSemesters([...semesters, { sgpa: "", credits: "" }]);
  };

  // Handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedSemesters = semesters.map((sem, i) =>
      i === index ? { ...sem, [field]: value } : sem
    );
    setSemesters(updatedSemesters);
  };

  // Calculate CGPA
  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalWeightedSGPA = 0;

    semesters.forEach((sem) => {
      const sgpa = parseFloat(sem.sgpa) || 0;
      const credits = parseFloat(sem.credits) || 0;

      totalCredits += credits;
      totalWeightedSGPA += sgpa * credits;
    });

    const cgpa = totalWeightedSGPA / totalCredits || 0;
    return cgpa.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <h2 className="text-4xl text-center text-gray-900 dark:text-white font-bold tracking-wide mb-8">
        Calculate Your CGPA
      </h2>
      <Link
        className="py-2 px-4 bg-orange-500 rounded-xl text-white"
        to="/app/calculate-gpa/sgpa"
      >
        SGPA
      </Link>
      <div className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        {semesters.map((semester, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Semester {index + 1}
            </h3>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mt-2">
              SGPA:
            </label>
            <input
              type="number"
              step="0.01"
              value={semester.sgpa}
              onChange={(e) => handleInputChange(index, "sgpa", e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter SGPA for this semester"
            />

            <label className="block text-sm text-gray-600 dark:text-gray-300 mt-2">
              Total Credits:
            </label>
            <input
              type="number"
              value={semester.credits}
              onChange={(e) =>
                handleInputChange(index, "credits", e.target.value)
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter Total Credits for this semester"
            />
          </div>
        ))}

        {/* Add Semester Button */}
        <div className="text-center">
          <button
            onClick={addSemester}
            className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800"
          >
            Add Another Semester
          </button>
        </div>

        {/* Calculate CGPA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => alert(`Your CGPA is: ${calculateCGPA()}`)}
            className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Calculate CGPA
          </button>
        </div>
      </div>
    </div>
  );
}

export default CGPACalculator;
