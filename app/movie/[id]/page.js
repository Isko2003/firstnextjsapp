import React from "react";
import MovieContainer from "@/containers/home/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

function MoviePage({ params, searchParams }) {
  const movieDetail = Movies.results.find((movie) => movie.id === +params.id);

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error == "true") {
    throw new Error("Error Happened");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
