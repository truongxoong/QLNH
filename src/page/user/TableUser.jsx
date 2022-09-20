import { message, Popconfirm, Table } from "antd";
import { collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../firebase/ConfigFirebase";
import { btnData, btnIsActice, btnOpen } from "../../redux/counterSlice";

function TableUser() {
  const dispatch = useDispatch()
  const colUser = collection(db, "users");
  const [listUsers, setListUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const is = useSelector((state) => state.counter.isActice)

  const ClickDeleteUser = async (record) => {
    setLoading(true)
    const colDelete = doc(db, 'users', record.id)
    await deleteDoc(colDelete)

    try {
      setLoading(false)
      message.success('Xoa thành công')
      dispatch(btnIsActice())
    }catch (err) {
      console.log(err);
    }
    
  }
  // edit user
  const clickEditUser = (record) => {
    dispatch(btnOpen())
    dispatch(btnData(record))    
  }
  
  useEffect(() => {
    setLoading(true)
    getDocs(colUser)
    .then((snapshot) => {
      let userData = [];
           snapshot?.docs.forEach((ele) => {
           userData.push({
            id: ele.id,
            ...ele.data()
          })
        });
      setListUsers(userData)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      setLoading(false)
    })
     
    
    // onSnapshot(colUser,  (snapshot) => {
    //   let userData = [];
    //   snapshot?.docs.forEach((ele) => {
    //    userData.push({
    //      id: ele.id,
    //      ...ele.data()
    //    })
    //  });
    //  setListUsers(userData)          
    // })
  }, [is]);

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
      render: (_, record) => (
        <Fragment>
          <Popconfirm title='Bạn chắn chắn muốn xoá không?' onConfirm={() => ClickDeleteUser(record)}>
            <a>delete</a>
          </Popconfirm>
          <button onClick={()=> clickEditUser(record)} className="ml-5 text-teal-600">edit</button>
        </Fragment>
       
      )
    },
  ];
  
  return (
    <Fragment>
      <Table loading={loading} rowKey={"id"} columns={column} dataSource={listUsers}></Table>
    </Fragment>
  );
}

export default TableUser;
