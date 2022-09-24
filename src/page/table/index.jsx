import TableDetail from "./TableDetail";
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Table() {
  const navigate = useNavigate()
  let {useId} = useParams()
  const clickDetail = (e) => {
    console.log(e);
    navigate('/table/5')
  }
  return <div className="m-7 flex">
      <div className=" grid grid-cols-4 gap-16">
        <TableDetail title='Talbe1' status='trong' seat='4' clickDetail={clickDetail}/>
        <TableDetail title='Talbe2' status='Dang su dung' seat='2' />
        <TableDetail title='Talbe2' status='Dang su dung' seat='8' />
        <TableDetail title='Talbe3' status='Da duoc dat (11h00)' seat='6' />
        <TableDetail title='Talbe3' status='Da duoc dat (11h00)' seat='6' />
        <TableDetail title='Talbe3' status='Da duoc dat (12h00)' seat='6' />
        <TableDetail title='Talbe3' status='Da duoc dat (11h00)' seat='6' />
      </div>
      {/* <div className="ml-16 w-[30%] bg-slate-300">
        <div className="p-5">
          <h3>Table 1</h3>
          <div className="bobyDetailTable">
            <div className="flex items-center justify-between">
            <div className="flex items-center">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://media.cooky.vn/recipe/g1/6328/s800x500/recipe6328-636420374621265037.jpg" />
              </div>
              <div className="pl-5 text-lg font-medium">Muc 1 nang</div>
            </div>
              <div className="text-[24px] font-medium text-red-500">230.000 VND</div>
            </div>
          </div>

          <div className="bobyDetailTable mt-5">
            <div className="flex items-center justify-between">
            <div className="flex items-center">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://media.cooky.vn/recipe/g1/6328/s800x500/recipe6328-636420374621265037.jpg" />
              </div>
              <div className="pl-5 text-lg font-medium">Muc 1 nang</div>
            </div>
              <div className="text-[24px] font-medium text-red-500">230.000 VND</div>
            </div>
          </div>
        </div>
      </div> */}
  </div>
  
}

export default Table;
