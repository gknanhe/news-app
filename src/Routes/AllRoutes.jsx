import { Routes, Route, Router, Navigate, Outlet } from "react-router-dom";
import News from "../components/News";
import SinglePage from "../components/SinglePage";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Favorite from "../components/Favoriates";
import { useSnapshot } from "valtio";
import state from "../store";

const PrivateRoute = () => {
  const snap = useSnapshot(state);

  //If authorized , return an outlet that will render child element
  //If not, return element that will navigate to login page
  return state.loggedUser ? <Outlet /> : <Navigate to="/login" />;
};
const AllRoutes = () => {
  return (
    <>
      {/* <Router> */}
      <Routes>
        {/* PRIVATE ROUTE */}
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<News />} />
          <Route exact path="/favoriate" element={<Favorite />} />
        </Route>
        {/* <Route path="/" element={<News/>} /> */}
        <Route path="/singlePage" element={<SinglePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* </Router> */}
    </>
  );
};

export default AllRoutes;
