import "./App.css";
import "antd/dist/antd.css";
import LoginFireBase from "./page/login";
import { Route, Routes } from "react-router-dom";
import Register from "./page/register";
import LayoutAnt from "./component/layout";
import Menus from "./page/menu";
import User from "./page/user";
import Dashboard from "./page/dashboard";
import Static from "./page/static";
import Table from "./page/table";
import DetailT from "./page/tableDetail";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LayoutAnt />}>
          <Route index element={<Dashboard />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/user" element={<User />} />
          <Route path="/static" element={<Static />} />
          <Route path="/table" element={<Table />} />
          <Route path="/table/:id" element={<DetailT />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginFireBase />} />
      </Routes>
    </div>
  );
}

export default App;
