import React from "react";
import { ClosedOrder } from "./ClosedOrder";
import { OpenOrder } from "./OpenOrder";

export function Footer() {
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
