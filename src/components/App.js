import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import termer from "../termer";

function App() {
  return (
    <div>
      <Header />
      {termer.map((ord) => (
        <Note
          key={ord.key}
          title={ord.ord}
          content={ord.mening}
          bild={ord.bild}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
