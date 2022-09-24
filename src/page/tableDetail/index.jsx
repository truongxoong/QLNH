import { Table } from "antd";
import {useParams} from "react-router-dom"
import ItemMenu from "../menu/ItemMenu";
import TableDetail from "../table/TableDetail";

function DetailT() {
    const {id} = useParams()
    console.log(id);
    const columns = [
        {
            title: 'Tên Món',
            dataIndex: 'name',
        },
        {
            title: 'So Luong',
            dataIndex: 'amount'
        },
        {
            title: 'Giá Tiền',
            dataIndex: 'price'
        },
        {
            title: 'Thành tiền',
            dataIndex: 'totalPrice',
            render: (d, record) => (                
                record.amount ? <p onClick={()=>{console.log(d)}}>{record.amount * record.price}</p>: <p>3</p>
            )
        },
    ]
    const data = [
        {
            name: 'Muc Nuong',
            amount: 1,
            price: 345
        },
        {
            name: 'Ech xao mang',
            amount: 3,
            price: 300
        },
        {
            name: 'Long xao dua',
            amount: 2,
            price: 50
        },
        {
            name: 'Long xao dua',
            amount: 2,
            price: 50
        },
        {
            name: 'Long xao dua',
            amount: 2,
            price: 50
        },
        {
            name: '',
            amount: '',
            price: 'Tổng tiền'
        }
    ]
    return <div className="flex">
        <div className="w-[70%] flex flex-col items-center">
            <TableDetail title='Table1'/>
            <div>
            <div className="mt-20 text-center text-3xl font-medium">MenuQuan</div>
            <div className="grid grid-cols-4 gap-5 mt-5  w-full">
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
            </div>
            </div>
        </div>
        <div className="w-[30%]  bg-slate-300">
            <p className="text-center text-3xl font-medium pt-5">Thanh Toan</p>
            <div>
                <Table columns={columns} dataSource={data} pagination={false}>

                </Table>
            </div>
        </div>
    </div>
}
export default DetailT