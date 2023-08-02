import { useEffect, useState } from "react";
import Input from "../components/Input";
import "./app.scss";
import "./animista.css";
const App = () => {
  //array objects where input values are stored
  const [money, setMoney] = useState([
    { cash: 2000, value: 0 },
    { cash: 500, value: 0 },
    { cash: 200, value: 0 },
    { cash: 100, value: 0 },
    { cash: 50, value: 0 },
    { cash: 20, value: 0 },
    { cash: 10, value: 0 },
    { cash: 5, value: 0 },
    { cash: 2, value: 0 },
    { cash: 1, value: 0 },
  ]);

  //usestate for calculating total cash amount from the array of objects
  const [total, setTotal] = useState(0);

  //useState hook to calculate total cash each time the money array changes
  useEffect(() => {
    setTotal(money.reduce((prev, EachMoney) => prev + EachMoney.value, 0));
  }, [money]);

  //handles adding the value from the input to the array of obj
  const handleAddMoney = (thiscash, value) => {
    setMoney(
      money.map((EachMoney) => ({
        cash: EachMoney.cash,
        value: EachMoney.cash === thiscash ? value : EachMoney.value,
      }))
    );
    // console.log(money);
  };

  //creating multiple  cash input components with same aray
  const cash = [2000, 500, 200, 100, 50, 20, 10, 5];
  let cashComponentsArr = [];
  for (let i = 0; i < cash.length; i++) {
    cashComponentsArr.push(
      <Input
        key={i}
        cash={cash[i]}
        coin={false}
        handleAddMoney={handleAddMoney}
      />
    );
  }

  //creating multiple  coin input components with same aray
  const coin = [20, 10, 5, 2, 1];
  let coinComponentsArr = [];
  for (let i = 0; i < coin.length; i++) {
    coinComponentsArr.push(
      <Input
        key={i}
        cash={coin[i]}
        coin={true}
        handleAddMoney={handleAddMoney}
      />
    );
  }

  //format maker for indian currency
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  return (
    <div className="app jello-horizontal">
      {console.log("Thanks for visiting this page.I'm not that good at css.")}
      <h1>Denomination App</h1>
      <div className="money-details">
        <div className="left">
          <h3>Enter the cash details</h3>
          <div className="inputs">{cashComponentsArr}</div>
        </div>
        <div className="right">
          <h3>Enter the coin details</h3>
          <div className="inputs">{coinComponentsArr}</div>
        </div>
        <h2>Total amount : {format(total)}</h2>
      </div>
    </div>
  );
};

export default App;
