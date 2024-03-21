import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";
function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (item) => item.id.toString() === params.id
  );
  if (!movieDetail) {
    notFound();
  }
  return (
    <>
      <MovieContainer movie={movieDetail} />
    </>
  );
}

export default MoviePage;
