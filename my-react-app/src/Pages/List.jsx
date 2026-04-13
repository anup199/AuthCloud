import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/applications")
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Applications</h2>

      {data.map((item) => (
        <div key={item._id}>
           
          {item.name} - {item.mobileno}
          <a href="#">View</a>
        </div>
      ))}
    </div>
  );
};

export default List;