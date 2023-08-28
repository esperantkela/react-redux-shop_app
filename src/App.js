import PhoneContainer from "./components/PhoneContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer />
      </div>
    </Provider>
  );
}

export default App;
