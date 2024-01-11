import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { Navbar } from "../../enteties/Navbar";

export const withRouter = (Component: React.FC) => {
  return () => (
    <BrowserRouter>
        <Layout>
            <Navbar/>
            <Layout.Content>
                <Component />
            </Layout.Content>
        </Layout>
    </BrowserRouter>
  );
};