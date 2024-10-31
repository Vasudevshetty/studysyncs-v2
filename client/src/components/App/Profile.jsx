import { useState } from "react";
import {
  FaCamera,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaBook,
  FaPhone,
  FaLock,
  FaGraduationCap,
} from "react-icons/fa";
import SpringModal from "./SpringModal"; 

function Profile() {
  const [formData, setFormData] = useState({
    name: "Thejas",
    semester: "Semester 4",
    email: "thejas@example.com",
    phone: "1234567890",
    password: "",
    confirmPassword: "",
    image: "https://www.svgrepo.com/show/192244/man-user.svg",
    course: "Cse",
    college: "Sjce, Mysuru",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); 
  };

  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-6 p-4 md:p-8 bg-gray-50">
      <div className="flex flex-col gap-8 p-6 md:p-10 bg-white rounded-lg shadow-lg lg:w-1/2">
        <div className="relative group">
          <img
            src={formData.image}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full object-cover border-2 border-gray-300 transition-opacity duration-300 hover:opacity-80 shadow-md"
          />
          {isEditing && (
            <>
              <label
                htmlFor="file-input"
                className="absolute bottom-2 left-20 md:left-24 bg-blue-500 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
              >
                <FaCamera className="text-white" />
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>
        <div className="px-4 flex flex-col gap-1 text-center md:text-left">
          <p className="text-lg md:text-xl font-bold">{formData.name}</p>
          <p className="text-xs md:text-sm text-gray-500"> thejas027 he/him</p>
          <p className="text-xs md:text-sm text-gray-500">
            {formData.semester}
          </p>
          <p className="text-xs md:text-sm text-gray-500">{formData.course}</p>
          <p className="text-xs md:text-sm text-gray-500">{formData.college}</p>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-1/2 shadow hover:bg-blue-700 transition"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between p-6 md:p-10 w-full bg-white rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Name", name: "name", icon: <FaUser /> },
            { label: "Email", name: "email", icon: <FaEnvelope /> },
            { label: "Course", name: "course", icon: <FaGraduationCap /> },
            {
              label: "Semester",
              name: "semester",
              icon: <FaBook />,
              component: (
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 px-4 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300 hover:shadow-lg"
                      : "bg-gray-100 cursor-not-allowed"
                  } rounded-lg focus:outline-none focus:border-blue-400 transition`}
                >
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i} value={`Semester ${i + 1}`}>
                      Semester {i + 1}
                    </option>
                  ))}
                </select>
              ),
            },
            { label: "Phone", name: "phone", icon: <FaPhone /> },
            {
              label: "Password",
              name: "password",
              icon: <FaLock />,
              type: showPassword ? "text" : "password",
              additional: (
                <button
                  type="button"
                  className="absolute right-3 top-10 text-gray-600 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              ),
            },
          ].map((field, index) => (
            <div className="relative" key={index}>
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                {field.label}
              </label>
              <span className="absolute left-3 top-10 text-gray-400">
                {field.icon}
              </span>
              {field.component ? (
                field.component
              ) : (
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 px-4 py-2 border ${
                    isEditing
                      ? "bg-white border-gray-300 hover:shadow-lg"
                      : "bg-gray-100 cursor-not-allowed"
                  } rounded-lg focus:outline-none focus:border-blue-400 transition`}
                />
              )}
              {field.additional}
            </div>
          ))}

          {isEditing && formData.password && (
            <div className="relative">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Confirm Password
              </label>
              <FaLock className="absolute left-3 top-10 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full pl-10 px-4 py-2 border bg-white border-gray-300 hover:shadow-lg rounded-lg focus:outline-none focus:border-blue-400 transition"
              />
            </div>
          )}
        </div>

        {isEditing && (
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4 w-48 hover:bg-green-700 transition shadow"
          >
            Save Changes
          </button>
        )}
      </form>

      <SpringModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        variant="message"
        className=""
      >
        <h2 className="text-lg font-bold">Profile Updated!</h2>
        <p className="mt-2">
          Your profile changes have been saved successfully.
        </p>
        <div className="flex gap-5">
          <button
          onClick={() => setIsModalOpen(false)}
          className="bg-green-500  px-4 py-2 rounded-lg mt-4 hover:bg-green-600 text-white transition"
        >
          Yes im sure
        </button>
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-red-500  px-4 py-2 rounded-lg mt-4 hover:bg-red-600 text-white transition"
        >
          Close
        </button>
        </div>
      </SpringModal>
    </div>
  );
}

export default Profile;
