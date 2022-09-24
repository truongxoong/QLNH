
function TableDetail(props) {

    return <div onClick={props.clickDetail} className="w-[350px] h-[150px] bg-red-300 rounded-full relative flex flex-col items-center cursor-pointer">
        <div>{props.title}</div>
        <div>Seat: <span>{props.seat}</span></div>
        <div>Status: <span>{props.status}</span></div>
    </div>
}
export default TableDetail