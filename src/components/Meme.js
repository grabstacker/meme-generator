import React, { useState, useEffect } from "react";

export default function Meme() {
  const [memeState, setMemeState] = useState({
    url: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });
  /**
   * Challenge: Save the random meme URL in state
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMemeState((prevState) => ({
      ...prevState,
      url: allMemes[randomNumber].url,
    }));
  }
  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setMemeState((prevState) => ({
      ...prevState,
      [name]: type === "text" && value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          onChange={handleChange}
          className="form--input"
          name="topText"
          value={memeState.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          onChange={handleChange}
          className="form--input"
          name="bottomText"
          value={memeState.bottomText}
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
