import VisitList from "./components/VisitList/VisitList";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <div className='app-container'>
      <Provider store={store}>
        <VisitList />
      </Provider>
    </div>
  );
};

export default App;
