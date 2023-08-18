import Advertisers from "../Advertisers/Advertisers";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import Team from "../Team/Team";
import Feedback from "../Feedback/Feedback";
import Advertisement from "../Advertisement/Advertisement";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisers></Advertisers>
            <Advertisement></Advertisement>
            <Team></Team>
            <NewsLetter></NewsLetter>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;