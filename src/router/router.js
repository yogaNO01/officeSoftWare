import TodoList from '../page/TodoList/TodoList.jsx'
import Calendar from '../page/Calendar/CalendarPage.jsx'
import { HeartOutlined } from '@ant-design/icons'
 
const routes = [
  {
    key: '/toDoList',
    element: <TodoList />,
    icon: <HeartOutlined />,
    label: 'toDoList',
  },
  {
    key: '/calendar',
    element: <Calendar />,
    icon: <HeartOutlined />,
    label: 'Calendar',
  }
]
 
export default routes