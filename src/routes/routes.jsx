import { Route, Routes } from "react-router-dom";
import {
  AllMovies,
  FullCast,
  Home,
  MovieDetail,
  NotFound,
  SearchResults,
} from "../pages";
export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-detail/:id" element={<MovieDetail />} />
      <Route path="/movie-detail/:id/fullcast" element={<FullCast />} />
      <Route path="/all-movies/:movietype" element={<AllMovies />} />
      <Route path="/search-results/:query" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
