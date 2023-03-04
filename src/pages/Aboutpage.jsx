import { Outlet, Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>About page</p>

            <ul>
                <li><Link to="contacts">to contacts</Link></li>
                <li><Link to="team">to team</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}

export { About }