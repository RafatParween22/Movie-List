 "use client";
import Header from './Header.js';
import Footer from './Footer.js';
import Row_of_movie from './Row_of_movie.js';
import {Data} from './data.js';
import { useState } from "react";
export default function My_func(){
const [movies, setMovies] = useState(Data);
	const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <>
    	<Header />
        {movies.map((item)=>
            <div key={item.id}>
            	<Row_of_movie
		         movie={item}
		         onDelete={() => handleDelete(item.id)}
		             	
               />
               
               
              
               <div className="empty">
               <hr className="line" />
               </div>
            </div>
            	
        )
        }
      	

      <Footer />
    </>
  );
}
