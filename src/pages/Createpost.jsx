import { useAuth } from "../hook/useAuth"
import { useNavigate } from "react-router-dom"

const Createpost = () => {
    const {signOut} = useAuth()
    const navigate = useNavigate()

    const handleClick = () => signOut(() => navigate("/", { replace: true }) )

    return (
        <div>
            <button onClick={handleClick}>Sign out</button>
            <h1>Create Post</h1>
        </div>
    )
}

export {Createpost}