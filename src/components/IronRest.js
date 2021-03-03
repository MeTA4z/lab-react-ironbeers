import React, { useState } from 'react';
import axios from 'axios'

function IronRest(props) {

    let [song, setSong] = useState('')

    const postIt = (e) => {
        e.preventDefault()
        console.log(' post it ', song)
        axios.post(`https://ironrest.herokuapp.com/favoriteTunes`, { name: song, length: '2 min', stars: 4 })
            .then(res => {
                console.log(res)
            })


    }
    return (
        <div>
            Iron Rest

            <form onSubmit={postIt}>

                <input onChange={(e) => setSong(e.target.value)} type="text" placeholder="Favorite song?" />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default IronRest;