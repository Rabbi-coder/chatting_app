import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/registration";
import Login from "./pages/signin";
import Home from "./pages/Home";
import RootLayout from "./Component/Rootlayout";
import Chat from "./pages/chat/chat";
import Notloggedinuser from "./privaterouter/Notloggedinuser";
import Loggedinuser from "./privaterouter/Loggedinusers";
import ForgetPassword from "./pages/forgetpassword";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Loggedinuser />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Chat" element={<Chat />}></Route>
          </Route>
        </Route>
        <Route element={<Notloggedinuser />}>
          <Route path="/Signup" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
