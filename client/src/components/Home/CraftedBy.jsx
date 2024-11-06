import { FaLinkedin, FaInstagram, FaGithub, FaBehance } from "react-icons/fa";

function CraftedBy() {
  const team = [
    {
      name: "Thejas C",
      role: "Full Stack Developer",
      image: "/profile.jpg",
      links: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
        { icon: <FaGithub />, url: "#" },
      ],
    },
    {
      name: "Vasudev Shetty",
      role: "Full Stack Developer",
      image: "/profile.jpg",
      links: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
        { icon: <FaGithub />, url: "#" },
      ],
    },
    {
      name: "BV Vivek",
      role: "UI/UX Designer",
      image: "/profile.jpg",
      links: [
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
        { icon: <FaBehance />, url: "#" },
      ],
    },
  ];

  return (
    <div className="text-white flex flex-col items-center justify-center bg-custom-black h-[50vh] sm:h-[80vh] p-2 sm:p-0 mb-4 sm:mb-0">
      <h2 className="text-3xl sm:text-5xl tracking-wider font-semibold text-center text-primary-yellow mb-12">
        <span className="border-b-2 border-gray-600 pb-2">Crafted By</span>
      </h2>

      <div className="flex items-center justify-evenly border border-primary-blue rounded-lg sm:w-[80vw] w-full  h-[50vh]">
        {team.map((member, index) => (
          <div key={index} className="">
            <div className="flex items-center flex-col gap-8">
              <img
                className="h-16 w-16  sm:h-32 sm:w-32  rounded-full object-cover border border-primary-blue"
                src={member.image}
                alt={`${member.name}'s profile`}
              />

              <div className="flex flex-col gap-2">
                <h1 className="flex justify-center font-semibold text-sm sm:text-lg ">
                  {member.name}
                </h1>
                <h2 className="text-gray-300 font-medium text-xs  sm:text-base">
                  {member.role}
                </h2>
                <div className="flex gap-4 justify-center">
                  {member.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-3xl text-white hover:text-yellow-400 transition duration-200"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CraftedBy;
