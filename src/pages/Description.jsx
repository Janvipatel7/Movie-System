import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Description = () => {
    const [movieObj, setMovieObj] = useState({})
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios.get(`http://localhost:3000/movies/${id}`)
            setMovieObj(data)
        }
        fetchData()
    }, [id])
    return (
        <div className="min-h-screen bg-[#0f1014] py-7">
            <div className="container">
                <div className="text-editor" dangerouslySetInnerHTML={{ __html: movieObj.desc }}></div>
            </div>
        </div>
    )
}

export default Description