"use client";

import { useState } from "react";
import { SearchMake } from '.';

const SearchBar = () => {

    const [make, setMake] = useState('')

    const handleSubmit = () => { }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <div className="searchbar__item">
                <SearchMake
                    make={make}
                    setMake={setMake} />
            </div>
        </form>
    )
}

export default SearchBar