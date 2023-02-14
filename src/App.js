import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    test();
  }, []);

  const test = () => {
    fetchDataFromApi("/movie/popular")
    .then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    });
  };
  return <div className="App">App</div>;
}

export default App;
