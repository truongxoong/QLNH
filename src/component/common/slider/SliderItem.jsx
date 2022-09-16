import { Link } from "react-router-dom";
import {
  DashboardFilled,
  ProfileFilled,
  GithubFilled,
  SignalFilled,
  DatabaseFilled,
} from "@ant-design/icons";

export const Router = [
  {
    key: "/",
    icon: <DashboardFilled />,
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "/menu",
    icon: <ProfileFilled />,
    label: <Link to="/menu">Menu</Link>,
  },
  {
    key: "/user",
    icon: <GithubFilled />,
    label: <Link to="/user">User</Link>,
  },
  {
    key: "/static",
    icon: <SignalFilled />,
    label: <Link to="/static">Thống Kê</Link>,
  },
  {
    key: "/table",
    icon: <DatabaseFilled />,
    label: <Link to="/table">Table</Link>,
  },
];
