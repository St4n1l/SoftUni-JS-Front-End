function movies(input) 
{

  let movies = [];

  input.forEach((element) => 
  {
    if (element.includes("addMovie")) 
    {

      let movieName = element.split("addMovie ")[1];
      movies.push({ name: movieName });

    } 
    else if (element.includes("directedBy")) 
    {

      let [movie, director] = element.split(" directedBy ");

      let searching = movies.find((el) => el.name == movie)

      if (searching) 
      {
            searching['director'] = director;
      }

    } 
    else if (element.includes("onDate")) 
    {
      let [movie, date] = element.split(" onDate ");

      let searching = movies.find((el) => el.name == movie);

      if (searching) 
      {
        searching['date'] = date;
      }

    }

  });

  movies.forEach((movie) => 
  {

    if(movie.hasOwnProperty("name") && movie.hasOwnProperty("director") && movie.hasOwnProperty("date"))
    {
        
    console.log(JSON.stringify(movie));
    }
  });

}

movies([
    "addMovie The Avengers",
    "addMovie Superman",
    "The Avengers directedBy Anthony Russo",
    "The Avengers onDate 30.07.2010",
    "Captain America onDate 30.07.2010",
    "Captain America directedBy Joe Russo"
]);
