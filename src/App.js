import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import Service from "./Service";
// import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://admin.naxa.com.np/api/services")
      .then((res) => res.json())
      .then((data) =>
        setAllData(data.sort((a, b) => a.service_order - b.service_order))
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header>
        <nav>
          <ul>
            {allData.map((data) => (
              <MenuItem id={data.id} title={data.title} />
            ))}
          </ul>
        </nav>
      </header>

      {/* Body  */}
      {allData.map((data) => (
        <Service
          key={data.id}
          id={data.id}
          title={data.title}
          desc1={data.description1}
          desc2={data.description2}
          photo={data.photo}
          icon={data.icon}
        />
      ))}
    </div>
  );
}

export default App;
