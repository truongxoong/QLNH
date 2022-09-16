import { Layout, Menu } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import HeaderCommon from "../common/header";
import { Router } from "../common/slider/SliderItem";
function LayoutAnt() {
  const { Header, Content, Sider } = Layout;
  return (
    <div>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="text-yellow-200 text-center mt-2 font-bold text-[35px]">
            <p>Store</p>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={Router}
          />
        </Sider>
        <Layout style={{ marginLeft: "200px", background: "white" }}>
          <Header className="border-b-2" style={{ background: "white" }}>
            <HeaderCommon />
          </Header>
          <Content className="m-3 bg-white">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutAnt;
