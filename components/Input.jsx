import { useEffect, useState } from "react";
import "./inputs.scss";
const Input = ({ cash, coin, handleAddMoney }) => {
  const [input, setInput] = useState(0);
  useEffect(() => {
    {
      handleAddMoney(cash, input * cash);
    }
  }, [input]);

  return (
    <div className="input">
      <span>
        {cash}₹ {!coin ? "💵" : "🟡"}
      </span>
      <input
        type="number"
        placeholder="0"
        onChange={(e) => setInput(e.target.value)}
      />
      <span htmlFor="">= {input * cash}</span>
    </div>
  );
};

export default Input;
