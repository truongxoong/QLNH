import { DatePicker, Select, TimePicker } from "antd";
import { useState } from "react";
import Overview from "./overview";

function Dashboard() {
  const {Option} = Select
  const [type, setType] = useState('date');
  const PickerWithType = ({ type, onChange }) => {
    if (type === 'date') return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
  };
  return <div className="m-7">
    <div>
    <Select value={type} onChange={setType}>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </div>

    <div className="grid grid-cols-4 gap-20 mt-10">
      <div><Overview title="Doanh Thu" percent="10%" total="$3434"/></div>     
      <div><Overview title="Đơn Hàng" percent="20%" total="1000"/></div>     
      <div><Overview title="Nhân Viên" percent="10%" total="200"/></div>     
      <div><Overview title="Table" percent="20%" total="30"/></div>     
    </div>
    <div className="">ok</div>
  </div>;
}

export default Dashboard;
