import { Routes, Route, Navigate } from "react-router-dom"

import { About } from "./pages/Aboutpage"
import { Blog } from "./pages/Blogpage"
import { Home } from "./pages/Homepage"
import { Notfoundpage } from "./pages/Notfoundpage"
import { Singlepage } from "./pages/Singlepage"
import { Createpost } from "./pages/Createpost"
import { Editpost } from "./pages/Editpost"
import { Loginpage } from "./pages/Loginpage"

import { Layout } from "./components/Layout"

import { RequireAuth } from "./hoc/RequireAuth"
import { AuthProvider } from "./hoc/AuthProvider"

const App = () => {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}> 
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />}>
                            <Route path="contacts" element={<div>Our contacts</div>} />
                            <Route path="team" element={<div>Our team</div>} />
                        </Route>
                        <Route path="about-us" element={<Navigate to="/about" replace />} />
                        <Route path="posts" element={<Blog />} />
                        <Route path="posts/:id" element={<Singlepage />} />
                        <Route path="posts/:id/edit" element={<Editpost />} />
                        <Route path="posts/new" element={
                            <RequireAuth>
                                <Createpost />
                            </RequireAuth>
                        } />
                        <Route path="login" element={<Loginpage />} />
                        <Route path="*" element={<Notfoundpage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App