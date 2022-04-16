import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FactCard from '../components/AnimeFacts';
import fetchAnimeFact from '../redux/factThunk';

const AnimeFacts = () => {
  const [response, setResponse] = useState();
  const { state } = useLocation();
  useEffect(() => {
    fetchAnimeFact(state.name).then((resp) => setResponse(resp));
  }, [
  ]);
  return (
    <div className="animeFacts">
      <h1>Facts Page</h1>
      <div className="animeFacts-card-container">
        { response
        && (
        <>
          <h1>
            {state.name}
          </h1>
          <div className="animeFacts-card-container">
            <img src={response.img} alt={state.name} />
          </div>
        </>
        )}
        {(response && response.data.length > 0) && response.data.map((name) => (
          <FactCard
            key={name.fact_id}
            fact={name.fact}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeFacts;
