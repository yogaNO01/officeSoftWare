import { Layout, Menu } from "antd";
import { useRoutes, useNavigate, Routes, Route } from "react-router-dom";
import routes from "./router/router";
import MenuPage from "./component/Menu/MenuPage.jsx";
import TodoList from "../src/page/TodoList/TodoList.jsx";
import Calendar from "../src/page/Calendar/CalendarPage.jsx";
const { Header, Content, Sider } = Layout;
function App() {
  let element = useRoutes(routes);
  const navigate = useNavigate();

  const onClick = (e) => {
    let path = e.keyPath.reverse().join("/");
    console.log(path);
    navigate(path.item.props.path, { replace: true });
  };
  return (
    <div className="App">
      <Header style={{ width: "100vw", height: "5vh" }}>
        <MenuPage onClick={onClick} mode="horizontal" items={routes} />
      </Header>
      <Content style={{ width: "100vw", height: "95vh" }}>
        <Routes>
          <Route path="*" element={<TodoList/>} />
          <Route path="/Calendar" element={<Calendar/>} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
