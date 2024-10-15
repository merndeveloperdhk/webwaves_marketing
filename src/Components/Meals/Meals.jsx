"use client"
import React, { useEffect, useState } from "react";


const Meals = () => {
    const [search, setSearch] = useState('a');
    const [menus, setMenus] = useState([]);
    const[error, setError] = useState("");

    const loadData = async() =>{
        try{
            const res = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            setMenus(data.meals)
            setError("")
        }
        catch(error){
            setError("No Data Found")
        }
    };
    const handler = (e) =>{
        setSearch(e.target.value)
    }

  useEffect(()=>{
    loadData()
  }, [search])
    
    
   
  return (
    <div>
        
        <div className="flex justify-center my-2">
          <input
          onChange={handler}
            type="text"
            placeholder="Search your meal"
            className="border border-black p-1"
          />
          <button className="bg-green-600 px-3 py-2">Search</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {
                menus.length > 0 && !error && menus?.map(meal => <div key={meal.idMeal}>
                    <h1>{meal.strMeal}</h1>
                    <p>{meal.strInstructions}</p>
                </div>)
            }
           {
            error && <h3>No Data ....</h3>
           }
        </div>
      
    </div>
  );
};

export default Meals;
