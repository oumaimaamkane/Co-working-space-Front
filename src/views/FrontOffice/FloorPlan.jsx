import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const offices = [
  {
    id: 1,
    name: "Office 1",
    x: 30,
    y: 50,
    chairs: [
      { id: 1, x: 15, y: 10 },
      { id: 2, x: 55, y: 10 },
    ],
  },
  {
    id: 2,
    name: "Office 2",
    x: 230,
    y: 50,
    chairs: [
      { id: 3, x: 10, y: 10 },
      { id: 4, x: 40, y: 10 },
    ],
  },
  {
    id: 3,
    name: "Office 3",
    x: 420,
    y: 50,
    chairs: [
      { id: 5, x: 10, y: 10 },
      { id: 6, x: 40, y: 10 },
    ],
  },

  {
    id: 4,
    name: "Office 4",
    x: 30,
    y: 150,
    chairs: [
      { id: 1, x: 15, y: 10 },
      { id: 2, x: 35, y: 10 },
    ],
  },
  {
    id: 5,
    name: "Office 5",
    x: 230,
    y: 150,
    chairs: [
      { id: 1, x: 10, y: 10 },
      { id: 2, x: 40, y: 10 },
    ],
  },
  {
    id: 6,
    name: "Office 6",
    x: 420,
    y: 150,
    chairs: [
      { id: 1, x: 10, y: 10 },
      { id: 2, x: 40, y: 10 },
    ],
  },
];

const FloorPlan = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOfficeClick = (office) => {
    setSelectedItem(office);
  };

  const handleChairClick = (office, chair) => {
    setSelectedItem({ ...office, chair });
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Coworking Space Booking
      </h1>
      <div className="flex justify-center">
        <svg width="600" height="280" className="border-2 border-gray-300">
          {offices.map((office) => (
            <g key={office.id}>
              <rect
                x={office.x}
                y={office.y}
                width="150"
                height="80"
                fill={
                  selectedItem?.id === office.id && !selectedItem.chair
                    ? "blue"
                    : "lightgray"
                }
                stroke="black"
                strokeWidth="2"
                onClick={() => handleOfficeClick(office)}
                className="cursor-pointer"
              >
                <title>{office.name}</title>
              </rect>
              {office.chairs.map((chair) => (
                <rect
                  key={chair.id}
                  x={office.x + chair.x}
                  y={office.y + chair.y}
                  width="40"
                  height="40"
                  fill={selectedItem?.chair?.id === chair.id ? "green" : "gray"}
                  stroke="black"
                  strokeWidth="1"
                  onClick={() => handleChairClick(office, chair)}
                  className="cursor-pointer"
                >
                  <title>{`${office.name} - Chair ${chair.id}`}</title>
                </rect>
              ))}
            </g>
          ))}
        </svg>
      </div>

      <Transition appear show={selectedItem !== null} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {selectedItem?.chair
                      ? `${selectedItem.name} - Chair ${selectedItem.chair.id}`
                      : selectedItem?.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Booking details for{" "}
                      {selectedItem?.chair
                        ? `${selectedItem.name} - Chair ${selectedItem.chair.id}`
                        : selectedItem?.name}
                      ...
                    </p>
                    {/* Implement booking form or details here */}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => alert("Booking confirmed!")}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default FloorPlan;
