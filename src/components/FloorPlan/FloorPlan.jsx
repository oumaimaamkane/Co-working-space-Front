import { useState } from "react";
import { Stage, Layer, Rect, Text, Group } from "react-konva";
import { Modal, Box, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import images from "../../assets/img/assets";
import "react-image-gallery/styles/css/image-gallery.css";
import FloorSelector from "./FloorSelector";
import "./FloorPlan.css";
import ReservationSteps from "./ReservationSteps";


const FloorPlan = () => {
  const [open, setOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [reservationStepsOpen, setReservationStepsOpen] = useState(false);

  const floors = [1, 2, 3];

  const handleOpen = (space) => {
    if (space.type !== "Exit" && space.type !== "Shared Coworking Space") {
      setSelectedSpace(space);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFloorChange = (floor) => {
    setCurrentFloor(floor);
  };

  const createLabeledRect = (x, y, width, height, color, label, space) => (
    <Group x={x} y={y} onClick={() => handleOpen(space)}>
      <Rect
        width={width}
        height={height}
        fill={color}
        stroke="black"
        strokeWidth={2}
      />
      <Text
        text={label}
        fontSize={14}
        fontFamily="Calibri"
        fill="black"
        width={width}
        align="center"
        verticalAlign="middle"
        padding={10}
      />
    </Group>
  );

  const createDesk = (x, y) => (
    <Rect
      x={x}
      y={y}
      width={50}
      height={30}
      fill="brown"
      stroke="black"
      strokeWidth={2}
    />
  );

  const createChair = (x, y) => (
    <Rect
      x={x}
      y={y}
      width={20}
      height={20}
      fill="blue"
      stroke="black"
      strokeWidth={2}
      cornerRadius={5}
    />
  );

  const createMeetingTable = (x, y, width, height) => (
    <>
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="grey"
        stroke="black"
        strokeWidth={2}
      />
      {createChair(x - 25, y + height / 2 - 10)}
      {createChair(x + width + 5, y + height / 2 - 10)}
      {createChair(x + width / 2 - 30, y - 25)}
      {createChair(x + width / 2 - 30, y + height + 5)}
      {createChair(x + width / 2 + 10, y - 25)}
      {createChair(x + width / 2 + 10, y + height + 5)}
    </>
  );

  const createTeamWorkspace = (x, y, workspace) => (
    <Group x={x} y={y} onClick={() => handleOpen(workspace)}>
      {createDesk(0, 0)}
      {createDesk(50, 0)}
      {createDesk(0, 30)}
      {createDesk(50, 30)}
      {createChair(15, -25)}
      {createChair(65, -25)}
      {createChair(15, 65)}
      {createChair(65, 65)}
    </Group>
  );

  const sharedWorkspaces = [
    {
      id: "sw1",
      x: 90,
      y: 320,
      label: "Workspace 1",
      type: "Individual Workspace",
      images: [images.workspace1, images.workspace2],
    },
    {
      id: "sw2",
      x: 300,
      y: 320,
      label: "Workspace 2",
      type: "Individual Workspace",
      images: [images.workspace3, images.workspace4],
    },
    {
      id: "sw3",
      x: 500,
      y: 320,
      label: "Workspace 3",
      type: "Individual Workspace",
      images: [images.workspace1, images.workspace3],
    },
  ];

  const getFloorData = (floorNumber) => {
    const baseSpaces = [
      {
        id: 1,
        type: "Meeting Room",
        label: `Meeting Room ${floorNumber}A`,
        x: 50,
        y: 50,
        width: 200,
        height: 150,
        color: "#f8b400",
        images: [images.workspace1, images.workspace2, images.workspace3],
      },
      {
        id: 2,
        type: "Private Office",
        label: `Private Office ${floorNumber}A`,
        x: 300,
        y: 50,
        width: 150,
        height: 150,
        color: "#6ab04c",
        images: [images.workspace4, images.workspace3, images.workspace1],
      },
      {
        id: 3,
        type: "Private Office",
        label: `Private Office ${floorNumber}B`,
        x: 500,
        y: 50,
        width: 150,
        height: 150,
        color: "#6ab04c",
        images: [images.workspace4, images.workspace3],
      },
      {
        id: 4,
        type: "Shared Coworking Space",
        label: `Shared Coworking Space ${floorNumber}`,
        x: 50,
        y: 250,
        width: 600,
        height: 200,
        color: "#3dc1d3",
        images: [images.workspace1, images.workspace2],
      },
      {
        id: 5,
        type: "Exit",
        label: `Exit ${floorNumber}A`,
        x: 50,
        y: 500,
        width: 100,
        height: 50,
        color: "#eb4d4b",
        images: [],
      },
      {
        id: 6,
        type: "Exit",
        label: `Exit ${floorNumber}B`,
        x: 550,
        y: 500,
        width: 100,
        height: 50,
        color: "#eb4d4b",
        images: [],
      },
    ];

    // floor-specific modifications
    switch (floorNumber) {
      case 2:
        baseSpaces[0].color = "#3f667f";
        break;
      default:
        break;
    }

    return baseSpaces;
  };

  return (
    <div>
      <FloorSelector
        floors={floors}
        currentFloor={currentFloor}
        onFloorChange={handleFloorChange}
      />
      <Stage width={800} height={600}>
        <Layer>
          {getFloorData(currentFloor).map((space) => (
            <Group key={space.id}>
              {createLabeledRect(
                space.x,
                space.y,
                space.width,
                space.height,
                space.color,
                space.label,
                space
              )}
              {space.type === "Meeting Room" &&
                createMeetingTable(space.x + 50, space.y + 60, 100, 50)}
              {space.type === "Private Office" && (
                <>
                  {createDesk(space.x + 50, space.y + 75)}
                  {createChair(space.x + 65, space.y + 50)}
                </>
              )}
              {space.type === "Shared Coworking Space" && (
                <>
                  {sharedWorkspaces.map((workspace) =>
                    createTeamWorkspace(workspace.x, workspace.y, workspace)
                  )}
                </>
              )}
            </Group>
          ))}
        </Layer>
      </Stage>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 550,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          {selectedSpace && (
            <>
              <Typography variant="h6">{selectedSpace.label}</Typography>
              <ImageGallery
                items={selectedSpace.images.map((src) => ({ original: src }))}
                showPlayButton={false}
                showThumbnails={false}
                showFullscreenButton={true}
                autoPlay={true}
                slideInterval={2500}
              />
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => {
                    handleClose();
                    setReservationStepsOpen(true);
                  }}
                >
                  Confirm Booking
                </button>
              </div>
            </>
          )}
        </Box>
      </Modal>

      {/* Reservation Steps Modal */}
      <Modal
        open={reservationStepsOpen}
        onClose={() => setReservationStepsOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <ReservationSteps onClose={() => setReservationStepsOpen(false)} />
        </Box>
      </Modal>
    </div>
  );
};

export default FloorPlan;