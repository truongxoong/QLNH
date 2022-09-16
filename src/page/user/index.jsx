import BtnAdd from "../../component/common/btnAdd";
import SearchHeader from "../../component/common/search";
import TableUser from "./TableUser";

function User() {
  return (
    <div className="m-7">
      <div className="flex justify-between">
        <SearchHeader />
        <BtnAdd title="Add User" />
      </div>
      <div className="mt-16">
        <TableUser />
      </div>
    </div>
  );
}

export default User;
