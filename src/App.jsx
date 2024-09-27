import CardLeft from "./Components/CardLeft";
import CardRight from "./Components/CardRight";
import Header from "./Components/Header";
// import ChoiceButton from "./Components/ChoiceButton"

function App() {
  return (
    <>
      <Header />
      <div className="body">
        <span className="left-body">
          <CardLeft />
        </span>
        <span className="right-body">
          <CardRight />
        </span>
      </div>
    </>
  );
}

export default App;
