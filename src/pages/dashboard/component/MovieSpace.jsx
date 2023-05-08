// import { useState, useEffect } from 'react';
// import MovieCard from './MovieCard';
// import searchIcon from '../../../assets/image/search.svg';
// import '../styles/movie.css';

// //b734048b
// const API_URL = 'http://www.omdbapi.com?apikey=b734048b'

// function MovieSpace() {
//     const [movies, setMovies] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`)
//     const data = await response.json();
  
//     setMovies(data.Search)
//   };
  
//     useEffect(() => {
//       searchMovies() 
       
//     }, [])
//     return (
//       // <div className="App">
//       <div className="app">
//       <h1>MovieSpace</h1>
  
//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//         />
//         <img
//           src={searchIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>
      
//       {movies?.length > 0 ? (
//           <div className="container">
//             {movies.map((movie) => (
//               <MovieCard movie={movie} />
//             ))}
//           </div>
//         ) : (
//           <div className="empty">
//             <h2>No movies found</h2>
//           </div>
//         )}
  
//     </div>
  
//     );
//   }
//   export default MovieSpace;