import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/components/HomePage";
import { ListPage } from "@/components/ListPage";
import { FormPage } from "@/components/FormPage";
import { Layout } from "@/components/ui/Layout";

export const AppRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
