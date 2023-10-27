function Bill({ total, setTotal }) {
  const handleSetTotal = (e) => setTotal(e.target.value);

  return (
    <div>
      <span>How much was the bill? </span>
      <input type="number" value={total} onChange={handleSetTotal} />
    </div>
  );
}

export default Bill;
