import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="back">
      <Nav />

      <p
        style={{
          marginLeft: "10%",
          marginTop: "10%",
          fontSize: "300%",
          fontFamily: "Comic Sans MS",
          fontWeight: "bold",
          color: "white"
        }}
      >
        Cooking is like making love, you do it well,
        <br /> or you do not do it at all.
      </p>
      <p
        style={{
          marginTop: "23%",
          fontFamily: "Georgia",
          fontWeight: "bold",
          fontSize: "150%",
          color: "white"
        }}
      >
        Made with <i class="fas fa-heart fa-2x" /> by <b>Atul</b>
      </p>
    </div>
  );
};

export default Home;
