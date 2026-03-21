import HtmlBookModal from "../HtmlBookModal/HtmlBookModal";
import CssBookModal from "../CssBookModal/CssBookModal";
import JsBookModal from "../JsBookModal/JsBookModal";
import "./Modals.css";

function App() {
  return (
    <>
      <section className="Modals">
        <div className="container">
          <div className="Modals__wrapper">
            <HtmlBookModal />
            <CssBookModal />
            <JsBookModal />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
