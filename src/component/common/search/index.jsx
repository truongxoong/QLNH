import { Input } from "antd";

function SearchHeader() {
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <div className="w-[400px]">
      <Search placeholder="tim kiem" onSearch={onSearch} enterButton />
    </div>
  );
}

export default SearchHeader;
