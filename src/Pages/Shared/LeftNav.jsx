import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsCards from "./News Cards/NewsCards";

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories);
    return (
        <div>
            <h1 className="text-2xl font-semibold">All catergies</h1>
            <div className="flex flex-col gap-4 p-4 space-y-2">
                {
                    categories.map(category => <NavLink
                        to={`/categories/${category.id}`}
                        className={({ isActive, isPending }) =>
                            isPending ? " rounded" : isActive ? "bg-slate-200  rounded" : ""}
                        key={category.id}><button className="btn btn-ghost text-left">{category.name}</button></NavLink>)
                }
            </div>
            <NewsCards slice={3}></NewsCards>
        </div >
    );
};

export default LeftNav;