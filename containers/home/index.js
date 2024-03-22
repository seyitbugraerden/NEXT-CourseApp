import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import MoviesSection from "@/components/movies-section";
function HomeContainer({ selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((item) => `${item.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title="Popular Movies"
        movies={Movies.results.slice(0, 12)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(12, 24)}
      />
    </div>
  );
}

export default HomeContainer;
