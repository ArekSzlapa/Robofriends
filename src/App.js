import Card from "./Card";
import Searchbox from "./Searchbox";
import "./style.css";
import { useEffect, useState } from "react";
import Scroll from "./Scroll";

const App = () => {
  const [box, setBox] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const robotsElements = data.map((robot) => {
    if (robot.name.toLowerCase().includes(box.toLowerCase())) {
      return (
        <Card
          id={robot.id}
          name={robot.name}
          username={robot.username}
          email={robot.email}
          key={robot.id}
        />
      );
    } else return;
  });
  if (data.length === 0) {
    return (
      <h1 className="tc">
        Loading, Please wait, <br /> The droids you are looking for will come
        here shortly
      </h1>
    );
  } else
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <Searchbox box={box} onChange={(event) => setBox(event.target.value)} />
        <Scroll>
          <div className="container">{robotsElements}</div>
        </Scroll>
      </div>
    );
};

export default App;
