import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import FactCard from '../components/AnimeFacts';
import fetchAnimeFact from '../redux/factThunk';
import './Facts.css';

const AnimeFacts = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState();
  const { state } = useLocation();
  useEffect(() => {
    fetchAnimeFact(state.name).then((resp) => setResponse(resp));
  }, [
  ]);
  return (
    <div className="animeFacts">
      <div className="header-fact">
        <IoIosArrowBack
          onClick={() => {
            navigate('/');
          }}
        />
        <h1>Facts Page</h1>
      </div>
      <div className="animeFacts-card-container">
        { response
        && (
        <>
          <h2>
            {state.name}
          </h2>
          <div className="animeFacts-image">
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
