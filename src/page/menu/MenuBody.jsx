import { Tabs } from 'antd';
import ItemMenu from './ItemMenu';
function MenuBody () {
    return <div>
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Món Nhậu" key="1">
                <div className=' mt-5 grid grid-cols-4 gap-20'>
                    <ItemMenu nameItem='Muc Kho' price='200.000 VND'/>
                    <ItemMenu nameItem='Tom rang' price='300.000 VND'/>
                    <ItemMenu nameItem='Ca xao ech' price='400.000 VND'/>
                    <ItemMenu nameItem='Ca xao ech' price='400.000 VND'/>
                    <ItemMenu nameItem='Ca xao ech' price='400.000 VND'/>
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đồ Uống" key="2">
                <div className=' mt-5 grid grid-cols-4 gap-20'>
                    <ItemMenu nameItem='Muc Kho' price='200.000 VND'/>
                    <ItemMenu nameItem='Tom rang' price='300.000 VND'/>
                    <ItemMenu nameItem='Ca xao ech' price='400.000 VND'/>
                    <ItemMenu nameItem='Ca xao ech' price='400.000 VND'/>
                    <ItemMenu nameItem='Ca xao ech' price='400.000 VND'/>
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Lẩu" key="3">
                <div className=' mt-5 grid grid-cols-4 gap-20'>
                    <ItemMenu nameItem='Lẩu Ếch' price='5657.000 VND'/>
                    <ItemMenu nameItem='Lẩu thái' price='3434.000 VND'/>
                    <ItemMenu nameItem='Lẩu Chim' price='244.000 VND'/>
                    <ItemMenu nameItem='Lẩu lòng bò' price='444.000 VND'/>
                    <ItemMenu nameItem='Lẩu thẩm cẩm' price='632.000 VND'/>
                </div>
            </Tabs.TabPane>
        </Tabs>
    </div>
}
export default MenuBody