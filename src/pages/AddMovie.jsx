import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { toast } from "react-toastify";

const AddMovie = () => {

  const [input, setInput] = useState({
    title: "", url: "", genre: ""
  })
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  };
  const editorRef = useRef();
  let markdown = useRef(null)
  const handleClick = () => {
    markdown.current = editorRef.current.getInstance().getHTML();
    setShow(!show)
  };

  const addMovie = async () => {
    const value = { ...input, desc: markdown.current }
    await axios.post("http://localhost:3000/movies", value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.title.trim() == "" || input.url.trim() == "" || input.genre.trim() == "") {
      toast.error("Enter All Details Correctly !")
      return;
    }
    addMovie()
    navigate("/display-movie")
    setInput({ title: "", url: "", genre: "" })
  }

  return (
    <section className="bg-[#0f1014] text-white min-h-screen flex items-center pb-20">
      <div className="relative w-full">
        <div className={`transition-all duration-300 ${show ? "blur-sm pointer-events-none" : ""}`}>
          <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 text-red-500">
              Add a Movie
            </h2>

            <form onSubmit={handleSubmit}
              className="w-full relative z-10 max-w-sm sm:max-w-md md:max-w-lg bg-[#1a1c22] p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">
                  Movie Title
                </label>
                <input onChange={handleChange} value={input.title} type="text" id="title"
                  placeholder="Enter movie title..."
                  className="bg-[#0f1014] border border-gray-600 text-white text-sm rounded-md focus:ring-1 focus:ring-red-600 focus:border-red-600 block w-full p-3 outline-none"/>
              </div>

              <div className="mb-5">
                <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-300">
                  Image URL
                </label>
                <input onChange={handleChange} value={input.url} type="text" id="url"
                  placeholder="Paste movie image URL..."
                  className="bg-[#0f1014] border border-gray-600 text-white text-sm rounded-md focus:ring-1 focus:ring-red-600 focus:border-red-600 block w-full p-3 outline-none"
                />
                {input.url && (
                  <div className="w-full max-w-[120px] h-28 my-5">
                    <img
                      src={input.url}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-md shadow-md"
                    />
                  </div>
                )}
              </div>
              <div className="mb-5 relative z-50">
                <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-300">
                  Genre
                </label>
                <select onChange={handleChange} value={input.genre} id="genre"
                  className="bg-[#0f1014] border border-gray-600 text-white text-sm rounded-md focus:ring-1 focus:ring-red-600 focus:border-red-600 block w-full p-3 outline-none">
                  <option value="">Choose a Genre</option>
                  <option value="Action">Action</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Science Fiction">Science Fiction</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="border border-gray-400 px-6 py-3 rounded-md font-semibold hover:border-white transition">
                  Add Description
                </button>
                <button
                  type="submit"
                  className="bg-[#e50914] px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full shadow-lg">
              <Editor
                initialValue=""
                previewStyle="vertical"
                height="400px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                ref={editorRef}
                hideModeSwitch={true}
              />
              <div className="flex justify-end gap-4 mt-4">
                <button onClick={handleClick} className="bg-[#1a1c22] text-white px-5 py-2 rounded">
                  Submit
                </button>
                <button onClick={() => setShow(false)} className="bg-[#1a1c22] text-white px-5 py-2 rounded">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddMovie;
