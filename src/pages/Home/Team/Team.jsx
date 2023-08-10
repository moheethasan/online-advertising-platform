const Team = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-10 justify-between items-center my-20 px-5">
      <div className="w-full">
        <img
          className=""
          src="https://avantage.bold-themes.com/hr/wp-content/uploads/sites/5/2019/04/img-team.png"
          alt=""
        />
      </div>
      <div className="w-full">
        <h4 className="font-bold py-3">GET OUR TEAM WORKING RIGHT</h4>
        <h2 className="font-bold text-5xl text-orange-500">Improve Your</h2>
        <h3 className="font-bold text-5xl mb-5 mt-3">Business</h3>
        <p className="py-2 text-justify">
          Identify your short-term and long-term goals. Develop a clear business
          strategy that outlines how you will achieve these goals. Make sure
          your goals are specific, measurable, achievable, relevant, and
          time-bound (SMART).
        </p>
        <p className="py-2 text-justify">
          Develop a strong marketing plan to reach and engage your target
          audience. Utilize various channels such as social media, content
          marketing, email campaigns, and SEO to increase your brands
          visibility.
        </p>
        <p className="py-2 text-justify">
          Build strong relationships within your industry. Networking can lead
          to collaborations, partnerships, and opportunities for growth.
        </p>
        <button className="bg-orange-500 btn mt-5 text-white border border-orange-500 hover:border hover:border-orange-500 hover:text-black">
          View Our Portfolio
        </button>
      </div>
    </div>
  );
};

export default Team;
