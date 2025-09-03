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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Movie Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image URL
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {
              movie.map((item) => {
                return <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                  </th>
                  <td className="px-6 py-4">
                    <div className="h-20 w-20 overflow-hidden">
                        <img src={item.url} />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {item.genre}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4">
                      <button className="border px-4 py-2" onClick={() => navigate(`/edit-movie/${item.id}`)}>Edit</button>
                      <button className="border px-4 py-2" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              })
            }
          </tbody>

        </table>
      </div>
    </>
  )
}

export default DisplayMovie