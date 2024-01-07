export default function Card({ data }){
    return (
      <div className={`flex flex-col items-center max-w-xs bg-bgColor p-4 rounded-md shadow-md text-txtColor`}>
        <img
          src={data.avatar_url}
          alt="profile"
          className="w-32 h-32 object-cover mb-4 rounded-full aspect-square"
        />
        <p className="text-xl font-bold mb-2">{data.name}</p>
        <p className="text-sm font-thin mb-2">{data.location}</p>
        <p className="mb-4">{data.bio}</p>
        <div className={`grid grid-cols-3 gap-4 p-2 rounded-md bg-bdColor`}>
          <div className="text-center">
            <p className="font-bold">{data.public_repos}</p>
            <p className="text-xs">Public Repos</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{data.followers}</p>
            <p className="text-xs">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{data.following}</p>
            <p className="text-xs">Following</p>
          </div>
        </div>
      </div>
    );
};