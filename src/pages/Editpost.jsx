import { useParams } from "react-router-dom"

const Editpost = () => {
    const {id} = useParams()

    return (
        <div>
            <h1>Edit Post {id}</h1>
        </div>
    )
}

export {Editpost}