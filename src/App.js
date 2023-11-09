import { Outlet } from 'react-router-dom';
import Header from "./elements/Header";
import Footer from "./elements/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
