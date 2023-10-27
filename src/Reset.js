function Reset({
  setTotal,
  setTip,
  setFriendTip,
  setSelected,
  setFriendSelected,
}) {
  const handleReset = () => {
    setTotal(0);
    setTip(0);
    setFriendTip(0);
    setSelected("");
    setFriendSelected("");
  };

  return <button onClick={handleReset}>Reset</button>;
}

export default Reset;
