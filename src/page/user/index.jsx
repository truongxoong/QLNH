
import BtnAdd from "../../component/common/btnAdd";
import SearchHeader from "../../component/common/search";
import ShowDrawer from "../../component/common/showDrawer";
import TableUser from "./TableUser";
import {useDispatch, useSelector} from "react-redux"
import {btnClose, btnData, btnOpen} from "../../redux/counterSlice/index"
import { Form, message } from "antd";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/ConfigFirebase";
import { useEffect } from "react";

function User() {
  const [form] = Form.useForm()
  const colAddUser = collection(db, 'users')
  const dataUserRow = useSelector((state) => state.counter.dataUser)
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(btnOpen())
    dispatch(btnData())
  }
  useEffect(()=>{
    dataUserRow?.id ? form.setFieldsValue(dataUserRow):form.resetFields()
  }, [dataUserRow])
  // ham xu ly edit user
  const onEdit = async (val) => {
    const colEdit = doc(db, 'users', dataUserRow?.id)
    try {
      await updateDoc(colEdit, val)
      dispatch(btnClose())
      message.success('Edit thành công')
    }
    catch(err) {
      console.log(err);
    }
  }
  // ham xu ly add user
  const onAdd = (value) => {
    addDoc(colAddUser, value)
      .then(() => {
        message.success('Them thanh cong');
        form.resetFields()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(btnClose())
      })
  }
  return (
    <div className="m-7">
      <div className="flex justify-between">
        <SearchHeader />
        <BtnAdd onClick={onClick} title="Add User" />
      </div>
      <div className="mt-16">
        <TableUser />
      </div>
      <div>
        {dataUserRow?.id ? <ShowDrawer form={form} title='EditUser' titleBtn='Luu' onFinish={onEdit}/>: 
        <ShowDrawer form={form} title='AddUser' titleBtn='Them' onFinish={onAdd}/>}
      </div>
      
    </div>
  );
}

export default User;
