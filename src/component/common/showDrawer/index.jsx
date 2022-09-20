import { Button, Drawer, Form, Input, message } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { db } from "../../../firebase/ConfigFirebase";
import {btnClose, btnIsActice} from '../../../redux/counterSlice/index'
import InputAntd from "../inputAntd";
import './drawerUser.css'

function ShowDrawer(props) {
  const colAddUser = collection(db, 'users')
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const open = useSelector((state) => state.counter.Opendrawer.open)


  const onClose = () => {
    dispatch(btnClose())
  };
  const onFinish = (values) => {
    // addDoc(colAddUser, values)
    //   .then(() => {
    //     message.success('Them thanh cong');
    //     form.resetFields()
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     dispatch(btnClose())
    //   })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return <div>
        <Drawer  title={props.title} placement="right" onClose={onClose} open={open} size='large'>
          <Form 
            form={props.form}
            className="formDrawerUser "
            onFinish={props.onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <InputAntd 
              label='Name' 
              name='name'
              rules = {[
                {
                    required: true,
                    message: 'Khong duoc de trong',
                },
                {
                  min: 6,
                  message: 'Ten phai lon hon 6 ky tu'
                }
              ]}
            />
            <InputAntd 
              label='Sex' 
              name='sex'
              rules = {[
                {
                    required: true,
                    message: 'Khong duoc de trong',
                },
              ]}
            />
            <InputAntd 
              label='Phone' 
              name='phone'
              rules = {[
                {
                    required: true,
                    message: 'Khong duoc de trong',
                },
                {
                  validator: (_, value) => {
                    const re = /^[0-9\b]+$/
                    if(!value || re.test(value)) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('bạn nhập không đúng định dạng sdt'))
                  }
                }
              ]}
            />
            <InputAntd 
              label='Position' 
              name='position' 
            />
            <InputAntd 
              label='shift' 
              name='shift' 
            />
            <Form.Item className="absolute right-6 bottom-0" >
              <Button onClick={() => dispatch(btnIsActice())}  type="primary" htmlType="submit">{props.titleBtn}</Button>
            </Form.Item>
          </Form>
      </Drawer>
    </div>
}
export default ShowDrawer