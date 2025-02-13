import { useEffect, useReducer } from "react";
import ProductsServices from "./services/productsServices";

// reducer
import { INITIAL_VALUES, productsReducer } from "./store/ProductsReducer";
import ProductsComponent from "./components/ProductsComponent";

function App() {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_VALUES);

  useEffect(() => {
    // fetch start
  }, []);

  function handleData() {
    dispatch({ type: "FETCH_STARTS" });

    ProductsServices.handleAllProducts()
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", data: res.data.products });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", msg: err.message });
      });
  }

  // OVDE IZNAD RETURNA PITAMO DA LI IMA GRESKE
  if (state.error) {
    return (
      <div className="flex items-center justify-center pt-[50px] text-center">
        <h2 className="text-2xl">
          There is some error with message:
          <br />
          <span className="text-red-600 font-semibold">{state.errorMsg}</span>
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">Reducer</h1>
      <button
        className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white"
        onClick={handleData}
      >
        Fetch data
      </button>
      {state.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        state.products.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.thumbnail} alt={el.title} />
              <h3>{el.title}</h3>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
