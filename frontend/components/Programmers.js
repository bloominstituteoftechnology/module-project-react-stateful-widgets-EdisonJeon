import React, { useState } from "react";

export const listOfAwesome = [
  { id: "1", name: "Ada Lovelace" },
  { id: "2", name: "Grace Hopper" },
  { id: "3", name: "Evelyn Boyd Granville" },
  { id: "4", name: "Mary Kenneth Keller" },
  { id: "5", name: "Frances Allen" },
  { id: "6", name: "Carol Shaw" },
];

export default function Programmers() {
  const [programmerList, setProgrammerList] = useState(listOfAwesome);
  const [featured, setFeatured] = useState("");

  const getNameOfFeatured = () => {
    return programmerList.find((value) => value.id === featured).name;
  };

  const style = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: featured ? "gold" : "royalblue",
  };

  return (
    <div className="widget-programmers container">
      <h2>Programmers</h2>
      <div className="programmers">
        {programmerList.map((dev) => (
          <div className="programmer" key={dev.id}>
            {dev.name}
            <button
              onClick={() => {
                setFeatured(dev.id);
              }}
            >
              Feature
            </button>
          </div>
        ))}
      </div>
      <div id="featured" style={style}>
        {featured
          ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
          : "Pick an awesome programmer"}
      </div>
    </div>
  );
}
