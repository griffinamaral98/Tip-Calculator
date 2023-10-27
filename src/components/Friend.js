function Friend({ setFriendTip, friendSelected, setFriendSelected }) {
  const handleSetFriendTip = (e) => {
    setFriendTip(e.target.value);
    setFriendSelected(e.target.value);
  };

  return (
    <div>
      <span>How did your friend like the service? </span>
      <select value={friendSelected} onChange={handleSetFriendTip}>
        <option value="select">Select</option>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Friend;
