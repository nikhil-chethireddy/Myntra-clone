import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetch from "../components/Fetch";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

function App() {
  const fetchingStatus = useSelector((store) => store.fetch);

  return (
    <div>
      <Header />
      <Fetch />
      {fetchingStatus ? <Outlet /> : <Spinner />}
      <Footer />
    </div>
  );
}

export default App;
