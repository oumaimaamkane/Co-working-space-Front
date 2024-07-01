const FloorSelector = ({ floors, currentFloor, onFloorChange }) => (
  <div className="floor-selector">
    {floors.map((floor) => (
      <button
        key={floor}
        onClick={() => onFloorChange(floor)}
        className={`floor-button ${currentFloor === floor ? "active" : ""}`}
      >
        Floor {floor}
      </button>
    ))}
  </div>
);

export default FloorSelector;