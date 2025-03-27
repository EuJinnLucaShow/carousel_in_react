import "./App.css";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel/Carousel";
import data from "./db/data.json";

function App() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        {data.map(({ title, description, id }) => {
          return <Card key={id} title={title} description={description} />;
        })}
      </Carousel>
    </div>
  );
}

export default App;
