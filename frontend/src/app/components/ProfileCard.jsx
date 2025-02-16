import Image from 'next/image';

const ProfileCard = ({ name, department, lateEntries, temporaryLeaves }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center w-[100%]">
      {/* Profile Avatar */}
      <div className="relative flex justify-center mb-4">
        <div className="bg-orange-300 rounded-full w-24 h-24 flex items-center justify-center">
          <span className="text-5xl font-bold text-white">👩</span>
        </div>
      </div>

      {/* User Information */}
      <h1 className="text-2xl font-bold text-gray-700 mt-4">{name}</h1>
      <p className="text-sm text-gray-500">{department}</p>

      {/* Stats */}
      <div className="flex justify-between items-center mt-6 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">{lateEntries}</h2>
          <p className="text-sm text-gray-500">
            Late Entries<br />in this Year
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">{temporaryLeaves}</h2>
          <p className="text-sm text-gray-500">
            Temporary Leave<br />in this Year
          </p>
        </div>
      </div>

      {/* Show More Button */}
      <button className="mt-6 px-4 py-2 bg-pink-400 text-white font-bold rounded-full hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300">
        Show More
      </button>
    </div>
  );
};

export default ProfileCard;
