import { useState, useRef, useCallback } from "react";
import "./FloorSketcher.css";

const FloorSketcher = () => {
  const [offices, setOffices] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const svgRef = useRef(null);

  const handleAddOffice = () => {
    const newOffice = {
      id: Date.now(),
      name: `Office ${offices.length + 1}`,
      x: 50,
      y: 50,
    };
    setOffices([...offices, newOffice]);
  };

  const handleMouseDown = useCallback(
    (e) => {
      const svg = svgRef.current;
      if (!svg) return;

      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;

      const cursorPoint = pt.matrixTransform(svg.getScreenCTM().inverse());

      if (selectedOffice) {
        setOffices((offices) =>
          offices.map((office) =>
            office.id === selectedOffice.id
              ? { ...office, x: cursorPoint.x, y: cursorPoint.y }
              : office
          )
        );
        setSelectedOffice(null);
      }
    },
    [selectedOffice]
  );

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Floor Sketcher Layout
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleAddOffice}
      >
        Add Office
      </button>
      <div className="border-2 border-gray-300">
        <svg
          ref={svgRef}
          width="100%"
          height="500"
          className="cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          {offices.map((office) => (
            <rect
              key={office.id}
              x={office.x}
              y={office.y}
              width="80"
              height="50"
              fill="lightgray"
              stroke="black"
              strokeWidth="2"
              onMouseDown={(e) => {
                e.stopPropagation();
                setSelectedOffice(office);
              }}
              className="cursor-move"
            >
              <title>{office.name}</title>
            </rect>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default FloorSketcher;
