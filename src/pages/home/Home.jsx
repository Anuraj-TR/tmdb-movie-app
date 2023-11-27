import { FetchRequest } from "../../utils/api";
import { Banner, CardList, FeaturedBlock } from "../../features";

export const Home = () => {
  return (
    <section>
      <Banner url={FetchRequest.fetchTrending} />
      <CardList
        title={"Upcoming Movies"}
        url={`${FetchRequest.fetchUpcomings}`}
      />
      <CardList
        title={"Horror Movies"}
        url={`${FetchRequest.fetchHorrorMovies}`}
      />
      <FeaturedBlock url={`${FetchRequest.fetchTopRated}`} />
      {/* <CardList />
      <CardList /> */}
    </section>
  );
};
