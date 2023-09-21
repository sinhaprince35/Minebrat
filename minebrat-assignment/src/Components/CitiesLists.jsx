import React, { useEffect, useState } from 'react'

const CitiesLists = ({selectedState, setSelectedCity}) => {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        if (selectedState) {
            fetch(`https://api.minebrat.com/api/v1/states/cities${selectedState}`)
                .then((response) => response.json())
                .then((data) => setCities(data))
                .catch((err) => console.log(err));
        }
    },[selectedState]);
  return (
    <div>
          <h2>Select a City:</h2>
          <select onChange={(e)=>setSelectedCity(e.target.value)}>
              <option value="">Select a City</option>
              {cities.map((city) => (
                  <option key={city.cityId} value={city.cityName}>
                      {city.cityName}
                  </option>
              ))}
          </select>
    </div>
  )
}

export default CitiesLists
