import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/kategori/CategoryIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate"; 
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate"; // 1. Import halaman baru
import CategoryCreate from "./pages/dashboard/kategori/CategoryCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* website utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* login dan register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* route yang dilindungi, hanya bisa diakses jika sudah login */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Manajemen Kategori */}
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route
              path="/dashboard/category/create"
              element={<CategoryCreate />}
            />

            {/* Manajemen Event */}
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route 
              path="/dashboard/event/create" 
              element={<EventCreate />} 
            />

            {/* Manajemen Pembicara */}
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            {/* 2. Daftarkan rute tambah pembicara di sini */}
            <Route 
              path="/dashboard/pembicara/create" 
              element={<PembicaraCreate />} 
            /> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;