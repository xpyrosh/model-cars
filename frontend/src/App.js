import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Model Karz</h1>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
