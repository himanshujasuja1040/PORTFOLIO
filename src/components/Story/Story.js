import React from "react";
import "./Story.css";
const Story = () => {
  return (
    <div className="story">
      <div
        className="story_left"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          border: "5px solid white",
          borderRadius: "20px",
          color: "white",
          letterSpacing: "3px",
          fontSize: "20px",
          fontFamily: "Item",
        }}
      >
        <h3 style={{ marginTop: "100px", marginLeft: "20px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sed
          sunt error. Quibusdam numquam sunt blanditiis? Possimus odit minima
          consequuntur dignissimos, ipsum eos quod repellat iste, dolor, facere
          fuga dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis consequuntur explicabo officiis id. Minus consequatur sunt
          est, ad incidunt quo sapiente, temporibus nulla culpa nemo voluptatum.
          Quo facilis rerum iure! Alias doloremque possimus officiis consectetur
        </h3>
      </div>
      <div className="story_right" style={{ fontFamily: "Item" }}>
        <p style={{ fontFamily: "fantasy" }}>
          Born at <br /> Delhi 🎄
        </p>
      </div>
    </div>
  );
};

export default Story;
