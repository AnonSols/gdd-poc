import { DndProvider } from "react-dnd";
import Grid1 from "./pages/Gridv2";
import Grid2 from "./pages/Gridv1"; 
import { HTML5Backend } from "react-dnd-html5-backend"; 
import { Toaster } from "react-hot-toast";
import { NameContextProvider } from "./context/NameContext";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import AppLayout from "./ui/AppLayout";
const App = () => {
  return (
    <NameContextProvider>
      <DndProvider backend={HTML5Backend}>
      
      <BrowserRouter>
      <Routes> 
        <Route element={<AppLayout />} >

        <Route index element={<Navigate replace to="grid-one" />} />
        <Route path="grid-one" element={<Grid1 />} />
        <Route path="grid-two" element={<Grid2 />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </DndProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "#4d5ec2",
            color: "white",
          },
        }}
      />
    </NameContextProvider>
  );
};

export default App;
