const Signup = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-100 to-green-300 min-h-screen">
      {/* Logo */}
      <img src="/logo.png" className="h-12 sm:h-24 mb-6" alt="Logo" />

      <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Form Container */}
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-5xl font-bold tracking-wider text-center mb-4 text-gray-700">
            Welcome
          </h1>
          <h2 className="text-xl text-gray-500 mb-6 text-center">
            Enter your University Seat Number to proceed
          </h2>

          {/* Form */}
          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="usn"
                className="mb-2 text-gray-600 font-medium text-sm"
              >
                Enter your USN:
              </label>
              <div className="relative">
                <input
                  id="usn"
                  type="text"
                  placeholder="02JST22UCS125"
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-1/4  bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © 2024 YourCompany. All rights reserved.
      </footer>
    </div>
  );
};

export default Signup;
