import {
    HomeOutlined
  } from '@ant-design/icons';
function Overview(props) {
    return <div className="p-2 rounded-xl bg-slate-200">
        <div className="flex justify-between  ">
            <p className="text-2xl font-bold ">{props.title}</p>
            <span className="mt-2">{props.percent}</span>
        </div>
        <div className="flex">
            <div  className="text-2xl"><HomeOutlined /></div>
            <div className="text-3xl pt-1 font-bold ml-5">{props.total}</div>
        </div>
    </div>
}
export default Overview