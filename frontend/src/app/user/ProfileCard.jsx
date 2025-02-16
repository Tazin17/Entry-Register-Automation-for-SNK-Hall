import Image from "next/image";

const ProfileCard = ({ name, department, lateEntries, temporaryLeaves }) => {
  return (
    <div className="bg-[rgb(199,225,249)] rounded-lg shadow-lg p-6 h-full text-center w-[110%] ml-[2px]">
      {/* Profile Avatar */}
      {/* <div className="relative flex justify-center mb-4"> */}
      {/* <div className="flex items-center justify-center">
          <span className="text-5xl font-bold text-white">👩</span>
        </div> */}

      {/* <Button
              className="absolute bottom-4 right-4 flex items-center"
              variant="secondary"
              size="sm"
              onClick={() => setIsEditCoverModel(true)}
            >
              <Camera className="mr-0 md:mr-2 h-4 w-4" />
              <span className="hidden md:block">Edit Cover Photo</span>
            </Button> */}

      {/* </div> */}


      <div className="ml-[340px] w-24 h-24 rounded-full overflow-hidden">
            <a
              href="https://your-link-here.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://wallpapercave.com/wp/wp12969847.jpg"
                alt="cover"
                className="w-full h-full object-cover"
              />
            </a>
          </div>


      {/* User Information */}
      <h1 className="text-2xl font-bold text-gray-700 mt-4">{name}</h1>
      <p className="text-sm text-gray-500">{department}</p>

      {/* Stats */}
      <div className="flex justify-between items-center mt-6 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">{lateEntries}</h2>
          <p className="text-sm text-gray-500">
            Late Entries
            <br />
            in this Year
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            {temporaryLeaves}
          </h2>
          <p className="text-sm text-gray-500">
            Temporary Leave
            <br />
            in this Year
          </p>
        </div>
      </div>

      {/* Show More Button */}
      <button className="mt-6 px-4 py-2 text-white font-bold rounded-full bg-[rgb(51,55,74)] ">
        Show More
      </button>
    </div>
  );
};

export default ProfileCard;
