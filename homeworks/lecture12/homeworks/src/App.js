import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IntroContent from "./contents/IntroContent";
import CounterContent from "./contents/CounterContent";
import ConverterContent from "./contents/ConverterContent";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <div className="row">
          <div className="col-2">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-intro"
                type="button"
                role="tab"
                aria-controls="v-pills-intro"
                aria-selected="true"
              >
                Introduction
              </button>
              <button
                className="nav-link"
                id="v-pills-counter-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-counter"
                type="button"
                role="tab"
                aria-controls="v-pills-counter"
                aria-selected="false"
              >
                Counter
              </button>
              <button
                className="nav-link"
                id="v-pills-converter-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-converter"
                type="button"
                role="tab"
                aria-controls="v-pills-converter"
                aria-selected="false"
              >
                Converter
              </button>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-9">
            <div className="tab-content py-5 px-5" id="v-pills-tabContent">
              <IntroContent />
              <CounterContent />
              <ConverterContent />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
