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

function Menu(props) {
  return (
    <main className="menu">
      <h2>Menu</h2>
      {[props.pizzas].length > 0 && (
        <ul className="pizzas">
          {props.pizzas.map((pizza) => {
            return (
              <li key={pizza.name}>
                <Pizza
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  photoName={pizza.photoName}
                  price={pizza.price}
                />
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>ingredients: {props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 13;
  const closeHour = 18;

  const isOpen = hour > openHour && hour < closeHour;

  if (isOpen) {
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            "We're open until {closeHour}:00". Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>;
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
