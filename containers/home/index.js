import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => +genre.id === +selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection
        title="Popular Films"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={popularMovies.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
