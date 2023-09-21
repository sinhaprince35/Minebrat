import React, { useEffect, useState } from 'react'
import CitiesLists from './CitiesLists';

const Lists = () => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch('/api/v1/states')
            .then((response) => response.json())
            .then((data) => setStates(data))
            .catch((error) => console.log(error));
    }, []);

    const handleSubmit = () => {
        setSubmitted(true);
    };
    
  return (
    <div>
          <h1>Select a State:</h1>
          <select onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Select a State</option>
              {states.map((state) => (
                  <option key={state.stateId} value={state.stateId}>
                      {state.name}
                  </option>
              ))}
          </select>
          <CitiesLists selectedState={selectedState} />
          <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Lists
