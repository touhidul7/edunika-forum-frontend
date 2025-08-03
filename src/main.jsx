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

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/forum",
        element: <ForumPage />,
      },
      {
        path: "/ask-question",
        element: <AskQuestion />,
      },
      {
        path: "/question-detail",
        element: <QuestionDetail />,
      },
      {
        path: "/chat",
        element: <ChatInterface />,
      },
      {
        path: "/profile",
        element: <StudentProfile />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
