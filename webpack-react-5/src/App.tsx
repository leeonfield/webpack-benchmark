import type { Settings as LayoutSettings } from "@ant-design/pro-layout";
import { PageLoading } from "@ant-design/pro-layout";
import { notification } from "antd";
// import type { RequestConfig, RunTimeLayoutConfig } from "umi";
import { Link } from "umi";
import RightContent from "./components/RightContent";
import Footer from "./components/Footer";
// import { currentUser as queryCurrentUser } from "./services/ant-design-pro/api";
import { BookOutlined, LinkOutlined } from "@ant-design/icons";

const isDev = process.env.NODE_ENV === "development";
const loginPath = "/user/login";

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      // const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        // history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>openAPI 文档</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
