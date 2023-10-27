import { useState } from "react";
import Bill from "./components/Bill";
import Service from "./components/Service";
import Friend from "./components/Friend";
import Total from "./components/Total";
import Reset from "./components/Reset";

function App() {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const [selected, setSelected] = useState("");
  const [friendSelected, setFriendSelected] = useState("");

  const average = (Number(tip) + Number(friendTip)) / 2;
  const totalTip = Math.round((Number(total) * average) / 100);
  const totalWithTip = Number(total) + totalTip;

  return (
    <div className="App">
      <Bill total={total} setTotal={setTotal} />
      <Service setTip={setTip} selected={selected} setSelected={setSelected} />
      <Friend
        setFriendTip={setFriendTip}
        friendSelected={friendSelected}
        setFriendSelected={setFriendSelected}
      />
      <Total
        total={total}
        totalWithTip={totalWithTip}
        tip={totalTip}
        average={average}
      />
      <Reset
        setTotal={setTotal}
        setTip={setTip}
        setFriendTip={setFriendTip}
        setSelected={setSelected}
        setFriendSelected={setFriendSelected}
      />
    </div>
  );
}

export default App;
