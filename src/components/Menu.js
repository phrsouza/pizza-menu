import React from "react";
import { Pizza } from "./Pizza";

export function Menu({ pizzas }) {
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
              return <Pizza pizza={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}
