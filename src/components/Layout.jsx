import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import HorizontalDivider from "./HorizontalDivider/HorizontalDivider";
import Container from "./Container/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <HorizontalDivider />
      <Container>
      <Outlet />
      </Container>
      <HorizontalDivider />
      <Footer />
    </>
  );
};

export default Layout;
