import { useParams } from "react-router"

const SingleProject = () => {

  const { id } = useParams()
  

  return (
    <div>
        <h1 className="text-4xl">Single Project</h1>        
        <p>{id}</p>
    </div>
  )
}

export default SingleProject
