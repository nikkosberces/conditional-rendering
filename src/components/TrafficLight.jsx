function TrafficLight({ color }) {
  return (
    <div>
      <div
        style={{
          background: color === "red" ? "red" : "gray",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          background: color === "yellow" ? "yellow" : "gray",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          background: color === "green" ? "green" : "gray",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default TrafficLight;
