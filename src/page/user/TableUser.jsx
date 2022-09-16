import { Table } from "antd";
import { collection, getDocs } from "firebase/firestore";

import { Fragment, useEffect, useState } from "react";
import { db } from "../../firebase/ConfigFirebase";

function TableUser() {
  const colUser = collection(db, "users");
  const userData = [];

  useEffect(() => {
    getDocs(colUser)
      .then((snapshot) => {
        snapshot?.docs.forEach((ele) => {
          userData.push({
            id: ele.id,
            ...ele.data(),
          });
        });
      })
      .catch((er) => console.log(er));
  }, []);
  console.log(userData);

  const column = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Chức vụ",
      dataIndex: "position",
    },
    {
      title: "Ca làm",
      dataIndex: "shift",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: (_, record) => <a onClick={() => console.log(record)}>delete</a>,
    },
  ];
  const data = [
    {
      id: 1,
      name: "truong",
      sex: "Nam",
      phone: "093383303",
      position: "bếp trưởng",
      shift: "fulltime",
    },
    {
      id: "sDzDrkmEAeiOsXkWuJZd",
      name: "Van Truong",
      phone: "0382451144",
      position: "Bep Truong",
      sex: "nam",
      shift: "fulltime",
    },
  ];
  console.log(data);
  return (
    <Fragment>
      <Table rowKey={"id"} columns={column} dataSource={userData}></Table>
      <div onClick={() => console.log(userData)}>dddd</div>
    </Fragment>
  );
}

export default TableUser;
