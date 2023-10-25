import { PasswordInput, Select, TextInput } from "@mantine/core";
import { useState } from "react";

import "./app.css";

function App() {
  const [cardNum, setCardNum] = useState<string>('');
  const [holderName, setHolderName] = useState<string>('');
  const [expMonth, setExpMonth] = useState<string | null>(null);
  const [expYear, setExpYear] = useState<string>('');
  const [cvv, setCVV] = useState<string>('');

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* card */}
      <div
        id="card"
        className="h-[204px] w-[323.52px] translate-y-28 rounded-lg p-2 flex flex-col justify-between text-white"
      >
        <div>TOP</div>
        <p className="border-[.5px] border-white text-center rounded-md">
          {cardNum == '' && '#'}
        </p>
        <div>BOTTOM</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-7 pt-40 px-14 shadow-lg rounded-md">
        <TextInput
          radius={"md"}
          style={{ width: "260px" }}
          label="Card number"
          value={cardNum ?? ""}
          onChange={(e) => setCardNum(e.target.value)}
        />
        <TextInput
          radius={"md"}
          style={{ width: "260px" }}
          label="Card holder"
          value={holderName ?? ""}
          onChange={(e) => setHolderName(e.target.value)}
        />

        <div className="flex w-[260px] gap-1">
          <Select
            radius={"md"}
            style={{ flex: 1 }}
            label="Expiration date"
            placeholder="Month"
            value={expMonth}
            onChange={setExpMonth}
            data={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ]}
          />
          <TextInput
            radius={"md"}
            className="flex-1 self-end"
            placeholder="Year"
            value={expYear ?? ""}
            onChange={(e) => setExpYear(e.target.value)}
          />
          <PasswordInput
            radius={"md"}
            className="flex-[.5]"
            label="CVV"
            value={cvv ?? ""}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>

        <button className="w-full bg-sky-600 text-white rounded-md text-sm py-2 shadow-md shadow-sky-300">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
