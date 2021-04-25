import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Model Karz</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
