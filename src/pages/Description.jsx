import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Description = () => {
  const [movieObj, setMovieObj] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(`http://localhost:3000/movies/${id}`)
      setMovieObj(data)
    }
    fetchData()
  }, [id])

  return (
    <div className="min-h-screen bg-[#0f1014] py-10 px-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">

        <div className="w-full md:w-1/3 flex justify-center">
          {movieObj.url && (
            <img
              src={movieObj.url}
              alt={movieObj.title}
              className="rounded-xl shadow-lg w-72 md:w-80 lg:w-96"
            />
          )}
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-500">
            {movieObj.title}
          </h1>
          <p className="text-gray-400 text-lg mb-6">
           • {movieObj.genre} 
          </p>

            <div
                className="text-editor prose prose-invert max-w-none mb-6"
                dangerouslySetInnerHTML={{ __html: movieObj.desc }}>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Description
