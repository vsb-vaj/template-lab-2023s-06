function Counter() {
  // TODO: Change the component to use state
  const internalCount = 0;

  return (
    <div>
      {/* Notice that we can add padding or other CSS styling to components */}
      <div style={{ padding: 5 }}>Counter is: {internalCount}</div>
      <button
        onClick={() => {
          // TODO: increment the internal count
          console.log("Increment was clicked, but nothing happened");
        }}
      >
        Click to increment
      </button>
    </div>
  );
}

export { Counter };
