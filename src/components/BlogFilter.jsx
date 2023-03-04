import { useState } from "react"

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
    const [data, setData] = useState({
        search: postQuery,
        latest: latest
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const query = form.search.value
        const isLatest = form.latest.checked

        const params = {}

        if (query.trim().length) params.post = query
        if (isLatest) params.latest = true
        
        setSearchParams(params)
    }

    const handleChange = (e) => {
        const name = e.target.name
        let value

        switch (e.target.type) {
            case "search": {
                value = e.target.value
                break
            }
            case "checkbox": {
                value = e.target.checked
                break
            }
            default: break 
        } 

        const target = { name, value }
        
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input 
                type="search" 
                name="search" 
                value={data.search} 
                onChange={handleChange} 
            />
            <label style={{ padding: "0 1rem" }}>
                <input 
                    type="checkbox"
                    name="latest" 
                    checked={data.latest}
                    onChange={handleChange}
                /> New only
            </label>
            <button type="submit">search</button>
        </form>
    )
}

export {BlogFilter}