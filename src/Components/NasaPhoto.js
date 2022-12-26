import React from 'react';

const dummyData = {
    date: "2022-12-26",
    explanation: "The star at the center created everything.",
    hdurl: "https://apod.nasa.gov/apod/image/2212/DragonsEgg_Croman_4231.jpg",
    title: "NGC 6164: Dragon's Egg Nebula and Halo"
  }

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className='explanation'>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;