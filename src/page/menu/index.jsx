import { Button, message, Modal, Upload } from "antd";
import BtnAdd from "../../component/common/btnAdd";
import SearchMenu from "./heardMenuSearch";
import MenuBody from "./MenuBody";
import {useSelector, useDispatch} from 'react-redux'
import { btnIsActice } from "../../redux/counterSlice";

function Menus() {
  const dispatch = useDispatch()
  const addMenu = () => {
    dispatch(btnIsActice())
  }
  const CloseMenu = () => {
    dispatch(btnIsActice())
  }

const open = useSelector((state) => state.counter.isActice)

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    // status: 'error',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

  return <div className="m-7">
    <div className="flex justify-between">
      <SearchMenu />
      <BtnAdd title="Thêm Món Ăn" onClick={addMenu}/> 
    </div>
    <div className="mt-5">
      <MenuBody />
    </div>
    <Modal title="Sửa món ăn" open={open} onOk={CloseMenu} onCancel={CloseMenu}>
        <Upload 
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[...fileList]}
          // className="upload-list-inline"  
        >
          <Button>Up load img</Button>
        </Upload>
    </Modal>
  </div>;
}

export default Menus;
