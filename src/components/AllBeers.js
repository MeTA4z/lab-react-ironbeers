import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllBeers(props) {
  let [beers, setbeers] = useState(['🍺']);

  const randNum = Math.floor(Math.random() * 255);

  let style = {
    backgroundColor: `rgb(${randNum},${randNum},${randNum})`,
  };

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      console.log(res);
      setbeers(res.data);
    });
  }, []);

  const showbeers = () => {
    return beers.map((eachbeer) => {
      return (
        <li className="beerList">
          <div style={style}>
            <Link to={`/allbeers/${eachbeer._id}`}>{eachbeer.name} </Link>{' '}
            <img src={eachbeer.image_url} />
          </div>
        </li>
      );
    });
  };

  return (
    <div style={style} className="gridBeer">
      {showbeers()}
    </div>
  );
}

export default AllBeers;