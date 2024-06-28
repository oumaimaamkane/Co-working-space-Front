import { useState, useEffect } from "react";

const ProfileModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [phone, setPhone] = useState(initialData.phone);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setName(initialData.name);
    setPhone(initialData.phone);
    setImage(null);
  }, [initialData, isOpen]);

  const handleSave = () => {
    onSave({ name, phone, image });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="block w-full mb-2 p-2 border rounded"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="block w-full mb-2 p-2 border rounded"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="block w-full mb-4"
        />
        <div className="flex justify-between space-x-2">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
