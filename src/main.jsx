import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import ForumPage from './Pages/ForumPage';
import AskQuestion from './Pages/AskQuestion';
import ShopPage from './Pages/ShopPage';
import QuestionDetail from './Pages/QuestionDetail';
import ChatInterface from './Pages/ChatInterface';
import StudentProfile from './Pages/StudentProfile';
import StudentDashboard from './Pages/StudentDashboard';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PrivateRoute from './Auth/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ForumPage />,
      },
      {
        path: "/questions",
        element: <ForumPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ]
  },
  {
    path: "",
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
      {
        path: "/ask-question",
        element: <AskQuestion />,
      },
      {
        path: "/question-detail",
        element: <QuestionDetail />,
      },
      {
        path: "/chat/",
        element: <ChatInterface />,
      },
      {
        path: "/profile",
        element: <StudentProfile />,
      },
      {
        path: "/dashboard",
        element: <StudentDashboard />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
