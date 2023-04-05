function Lottery() {
  // TODO: Change the component to use state
  const lotteryNumbers = [];

  return (
    <div className="Lottery">
      <div className="TodaysNumbers">
        <div style={{ padding: 5 }}>
          Today's numbers are: {JSON.stringify(lotteryNumbers)}
        </div>
        <button
          onClick={() => {
            let nextNumber = Math.floor(Math.random() * 100);
            console.log(`Next number is ${nextNumber}`);
            // TODO: save the random number to the array
          }}
        >
          Roll next number
        </button>
      </div>
    </div>
  );
}

export { Lottery };
