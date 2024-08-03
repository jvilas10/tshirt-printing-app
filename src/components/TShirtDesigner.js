import React, { useState } from 'react';

function TShirtDesigner() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h2>Design Your T-Shirt</h2>
      <input
        type="text"
        placeholder="Add Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="file" onChange={handleImageUpload} />
      <div className="tshirt-preview">
        <div className="tshirt">
          {image && <img src={image} alt="Design" />}
          <p>{text}</p>
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default TShirtDesigner