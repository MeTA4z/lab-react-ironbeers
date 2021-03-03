import React, {useState, useEffect} from 'react';
import axios from 'axios';

function RandomBeer(props) {
    let [beer, setBeer] = useState({})

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(dataz =>{
            console.log(dataz)
            setBeer(dataz.data)
        })

    
}, [])

    const styleRandom={
        width:'100px'
    }
    
    
    return (
        <div>
        <div>
            <img style={styleRandom} src={beer.image_url}/>
        </div>
        <div>
            {beer.name}
        </div>
        </div>
    );
}

export default RandomBeer;