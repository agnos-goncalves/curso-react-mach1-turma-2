import Movie from "./components/Movie";

function App() {
  const movies = [
    {
      title: "The Avengers",
      description: "lorem summer dummer",
      director: "Jon Favreau",
      date: "2012",
    },
    {
      title: "Avengers Age of Ultron",
      description: "lorem summer dummer",
      director: "Jon Favreau",
      date: "2015",
    },
    {
      title: "Avengers infinity Wars",
      description: "lorem summer dummer",
      director: "Jon Favreau",
      date: "2018",
    },
  ];
  return (
    <>
      <h1>List Movies</h1>
      {movies.map((movie) => (
        <Movie data={movie} />
      ))}
    </>
  );
}

export default App;
