import { NavLink, Outlet } from "react-router-dom"
import { CustomLink } from "./CustomLink"

const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <main>
                <Outlet />
            </main>
            
            <footer>2023</footer>
        </>
    )
}

export {Layout}