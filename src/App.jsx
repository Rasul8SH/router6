import { Routes, Route } from "react-router-dom"

import { About } from "./pages/Aboutpage"
import { Blog } from "./pages/Blogpage"
import { Home } from "./pages/Homepage"
import { Notfoundpage } from "./pages/Notfoundpage"
import { Singlepage } from "./pages/Singlepage"
import { Createpost } from "./pages/Createpost"
import { Editpost } from "./pages/Editpost"

import { Layout } from "./components/Layout"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}> 
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Blog />} />
                    <Route path="posts/:id" element={<Singlepage />} />
                    <Route path="posts/:id/edit" element={<Editpost />} />
                    <Route path="posts/new" element={<Createpost />} />
                    <Route path="*" element={<Notfoundpage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App