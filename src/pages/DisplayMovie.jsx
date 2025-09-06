import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const DisplayMovie = () => {

  const [movie, setMovie] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    displayMovie()
  }, [])
  const displayMovie = async () => {
    const { data } = await axios.get("http://localhost:3000/movies");
    console.log(data)
    setMovie(data);
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/movies/${id}`)
    displayMovie()
  }

  return (
    <>
      <div className="w-full bg-[#0f1014] min-h-screen flex flex-col items-center justify-start p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Movie Details</h2>

        <div className="relative bg-white text-black overflow-x-auto shadow-xl rounded-2xl w-full">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-4 tracking-wide">Movie Title</th>
                <th scope="col" className="px-6 py-4 tracking-wide">Image</th>
                <th scope="col" className="px-6 py-4 tracking-wide">Genre</th>
                <th scope="col" className="px-6 py-4 tracking-wide text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {movie.map((item) => (
                <tr key={item.id} className="transition duration-200 border-b border-gray-300">
                  <td className="px-6 py-4 font-semibold whitespace-nowrap">{item.title}</td>
                  <td className="px-3 py-2">
                    <div className="h-20 w-20 rounded-lg overflow-hidden shadow-md border border-gray-300">
                      <img src={item.url} alt={item.title} className="object-cover w-full h-full" />
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm">
                      {item.genre}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="px-3 py-2 rounded-lg text-green-600 hover:bg-green-100 transition"
                        onClick={() => navigate(`/edit-movie/${item.id}`)}>
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="px-3 py-2 rounded-lg text-red-600 hover:bg-red-100 transition"
                        onClick={() => handleDelete(item.id)}>
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                      <button
                        onClick={() => navigate(`/description/${item.id}`)}
                        className="px-4 py-2 text-xs font-medium text-black border rounded-lg hover:opacity-90 transition">
                        View More
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DisplayMovie