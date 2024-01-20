import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzaData} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fauno React Pizzeria</h1>
    </header>
  );
}

function Menu({ pizzas }) {
  return (
    <main className="menu">
      <h2>Menu</h2>
      {[pizzas].length > 0 ? (
        <>
          <p>
            Authentic Italian cusine. Creative dishes to choose all from out
            stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return (
                <li key={pizza.name}>
                  <Pizza pizza={pizza} />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <div className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>ingredients: {pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 13;
  const closeHour = 22;

  const isOpen = hour > openHour && hour < closeHour;

  if (isOpen) {
    return (
      <footer className="footer">
        {isOpen ? (
          <OpenOrder closeHour={closeHour} />
        ) : (
          <ClosedOrder openHour={openHour} closeHour={closeHour} />
        )}
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="order">
        <p>
          We're closed. Working hours from {openHour}:00 to {closeHour}:00
        </p>
      </div>
    </footer>
  );
}

function OpenOrder({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function ClosedOrder({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're closed. Working hours from {openHour}:00 to {closeHour}:00
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
