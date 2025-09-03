import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {

  const [input, setInput] = useState({
    title: "", url: "", genre: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  };

  const addMovie = async () => {
    await axios.post("http://localhost:3000/movies", input)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie()
    navigate("/display-movie")
    setInput({ title: "", url: "", genre: "" })
  }

  return (
    <section className="bg-[#0f1014] text-white min-h-screen flex items-center pb-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-red-500">
          Add a Movie
        </h2>


        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[#1a1c22] p-8 rounded-xl shadow-lg">
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">
              Movie Title
            </label>
            <input onChange={handleChange} value={input.title} type="text" id="title" placeholder="Enter movie title..."
              className="bg-[#0f1014] border border-gray-600 text-white text-sm rounded-md  focus:ring-1 focus:ring-red-600 focus:border-red-600  block w-full p-3 outline-none" />
          </div>


          <div className="mb-5">
            <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-300">
              Image URL
            </label>
            <input onChange={handleChange} value={input.url} type="text" id="url" placeholder="Paste movie image URL..."
              className="bg-[#0f1014] border border-gray-600 text-white text-sm rounded-md focus:ring-1 focus:ring-red-600 focus:border-red-600  block w-full p-3 outline-none" />
            {
              input.url && <div className="h-20 w-20 my-7">
                <img src={input.url} alt="" />
              </div> 
            }
          </div>


          <div className="mb-5 relative z-50">
            <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-300">
              Genre
            </label>
            <select onChange={handleChange} value={input.genre} id="genre" className="bg-[#0f1014] border border-gray-600 text-white text-sm rounded-md  focus:ring-1 focus:ring-red-600 focus:border-red-600  block w-full p-3 outline-none">
              <option value="">Choose a Genre</option>
              <option value="Action">Action</option>
              <option value="Romantic">Romantic</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
              <option value="Science Fiction">Science Fiction</option>
            </select>
          </div>

          <div className="flex justify-center gap-5 mt-8">

            <button
              type="button"
              className="border border-gray-400 px-6 py-3 rounded-md font-semibold hover:border-white transition"
            >
              Add Description
            </button>

            <button
              type="submit"
              className="bg-[#e50914] px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddMovie;
