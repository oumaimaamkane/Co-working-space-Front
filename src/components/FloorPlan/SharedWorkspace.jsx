import { Group, Rect } from "react-konva";
import images from "../../assets/img/assets";

const SharedWorkspace = ({ x, y, handleOpen }) => {
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
      images: [
        images.workspace1, images.workspace2,images.workspace3,
      ],
    },
    {
      id: "sw2",
      x: 300,
      y: 320,
      label: "Workspace 2",
      type: "Individual Workspace",
      images: [
        images.workspace1, images.workspace2,images.workspace3,
      ],
    },
    {
      id: "sw3",
      x: 500,
      y: 320,
      label: "Workspace 3",
      type: "Individual Workspace",
      images: [
        images.workspace1, images.workspace2,images.workspace3,
      ],
    },
  ];

  return (
    <Group x={x} y={y}>
      {sharedWorkspaces.map((workspace) =>
        createTeamWorkspace(workspace.x, workspace.y, workspace)
      )}
    </Group>
  );
};

export default SharedWorkspace;
