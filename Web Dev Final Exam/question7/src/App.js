import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt="cat" />
      ))}
    </div>
  );
}

export default App;
