function Total({ total, tip, totalWithTip, average }) {
  return (
    <strong>
      {total > 0
        ? `You pay $${totalWithTip} ($${total} + $${tip} tip. Avg. Tip: ${average}%)`
        : ""}
      <br />
    </strong>
  );
}

export default Total;
