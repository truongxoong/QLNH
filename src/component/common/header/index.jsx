import { Input } from "antd";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";

function HeaderCommon() {
  return (
    <div className="flex justify-between">
      <div className="">
        <Input prefix={<SearchOutlined />} placeholder="tìm kiếm tại đây" />
      </div>
      <div className="flex">
        <div>
          <BellOutlined />
        </div>
        <div className="flex pl-10 items-center ">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mountbrightonoct3_2019_%28cropped%29.jpg/800px-Mountbrightonoct3_2019_%28cropped%29.jpg"
              alt=""
            />
          </div>
          <p className="m-0 pl-1">Admin</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderCommon;
