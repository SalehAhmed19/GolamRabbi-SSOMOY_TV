import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function DatePicker() {
  const [date, setDate] = useState(new Date());
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;
  return (
    <div className="text-primary rounded-md bg-[#0E0F15]">
      <h4 className="text-primary text-xl font-bold px-5 pt-5">
        তারিখ নির্বাচন করো
      </h4>
      <style>{css}</style>
      <DayPicker
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
        }}
        modifiersStyles={{
          disabled: { fontSize: "75%" },
        }}
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    </div>
  );
}

export default DatePicker;
