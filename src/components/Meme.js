import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeState, setMemeState] = React.useState({
    url: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });
  /**
   * Challenge: Save the random meme URL in state
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeState((prevState) => ({
      ...prevState,
      url: memesArray[randomNumber].url,
    }));
  }
  const handleTopChange = (e) => {
    setMemeState((prevState) => ({
      ...prevState,
      topText: e.target.value,
    }));
  };
  const handleBottomChange = (e) => {
    setMemeState((prevState) => ({
      ...prevState,
      bottomText: e.target.value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          onChange={handleTopChange}
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          onChange={handleBottomChange}
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="container">
        <img src={memeState.url} alt="MemeImg" className="meme--image" />
        <div className="centered">{memeState.topText}</div>
        <div className="bottom">{memeState.bottomText}</div>
      </div>
    </main>
  );
}
