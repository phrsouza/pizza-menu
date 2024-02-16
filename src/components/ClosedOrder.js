import React from "react";

export function ClosedOrder({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're closed. Working hours from {openHour}:00 to {closeHour}:00
      </p>
    </div>
  );
}
