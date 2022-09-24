import {EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import {useDispatch} from 'react-redux'
import { btnIsActice } from '../../redux/counterSlice';
function ItemMenu(props) {
    const dispatch = useDispatch()
    const EditMenu = (record) => {
        dispatch(btnIsActice())
    }
    return <div className='relative '>
        <div className='p-5 flex flex-col items-center bg-slate-200 rounded-3xl'>
            <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src='https://media.cooky.vn/recipe/g1/6328/s800x500/recipe6328-636420374621265037.jpg' />
            </div>
            <p className='text-[25px] font-medium pt-5 m-0'>{props.nameItem}</p>
            <span className='text-[18px] font-bold text-red-500'>{props.price}</span>
        </div>
        <div className='absolute top-2 right-4 flex '>
            <div onClick={() =>EditMenu()} className='text-xl text-teal-500 cursor-pointer'><EditOutlined /></div>
            <div className='text-xl pl-3 text-red-600 cursor-pointer'><DeleteOutlined  /></div>
        </div>
    </div> 
    
    
}
export default ItemMenu