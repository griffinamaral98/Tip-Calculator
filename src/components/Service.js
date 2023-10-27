function Service({ setTip, selected, setSelected }) {
  const handleSetTip = (e) => {
    setTip(e.target.value);
    setSelected(e.target.value);
  };

  return (
    <div>
      <span>How did you like the service? </span>
      <select value={selected} onChange={handleSetTip}>
        <option value="select">Select</option>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Service;
