import React, { useState } from "react"

const Filter = ({ setFilter }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="dropdown">
            <button onClick={handleOpen}>Filter</button>
            {open ? (
                <>
                    <ul className="filter">
                        <li className="filter-item">
                            <button className="filter-button" onClick={() => setFilter("plumbing")}>Plumbing</button>
                        </li>
                        <li className="filter-item">
                            <button className="filter-button" onClick={() => setFilter("electrical")}>Electrical</button>
                        </li>
                        <li className="filter-item">
                            <button className="filter-button" onClick={() => setFilter("framing")}>Framing</button>
                        </li>
                    </ul>
                    <button onClick={() => setFilter("")}>reset</button>
                </>

            ) : null}
        </div>
    )
}

export default Filter