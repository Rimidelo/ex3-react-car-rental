import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import { Box, Container } from "@mui/material";
import "./style/style.css";

function App() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    type: ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"],
    capacity: [2, 4, 6],
    price: 100,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    fetch("/data/cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error loading cars:", error));
  }, []);

  const toggleFavorite = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, favorite: !car.favorite } : car
      )
    );
  };

  return (
    <Router>
      <Box sx={{ backgroundColor: "#F6F7F9", minHeight: "100vh" }}>
        <Header
          onSearch={setSearchQuery}
          showFavorites={showFavorites}
          toggleFavorites={() => setShowFavorites(!showFavorites)}
        />

        <Box>
          <Container disableGutters maxWidth={false} sx={{ display: "flex" }}>
            <Filters filters={filters} setFilters={setFilters} cars={cars} />
            <Box sx={{ width: "100%" }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <CarList
                      cars={cars}
                      filters={filters}
                      searchQuery={searchQuery}
                      showFavorites={showFavorites}
                      toggleFavorite={toggleFavorite}
                    />
                  }
                />
                <Route
                  path="/car/:id"
                  element={
                    <CarDetails cars={cars} toggleFavorite={toggleFavorite} />
                  }
                />
              </Routes>
            </Box>
          </Container>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
