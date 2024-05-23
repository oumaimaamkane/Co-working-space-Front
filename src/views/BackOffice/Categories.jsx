import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleAddCategory = () => {
    if (!newCategoryName) {
      setError("Category name is required");
      return;
    }
    setError("");
    axios
      .post("http://127.0.0.1:8000/api/categories", { name: newCategoryName })
      .then((response) => {
        setCategories([...categories, response.data]);
        setNewCategoryName("");
        setIsAddModalOpen(false);
        setSuccess("Category added successfully!");
        setTimeout(() => setSuccess(""), 3000);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
        setError("Failed to add category. Please try again.");
      });
  };

  return (
    <div className="p-6 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-4 px-8 dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List of Categories
        </span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 font-medium"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Category
        </button>
      </div>
      {success && (
        <div className="bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 p-4 rounded-lg shadow-md mb-4">
          {success}
        </div>
      )}

      <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg">
        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-600">
              <th className="px-6 py-3 text-gray-800 dark:text-gray-100 font-medium">Name</th>
              <th
                className="px-4 py-3 text-gray-800 dark:text-gray-100 font-medium text-center border-l-2 dark:border-neutral-300"
                style={{ width: "80px" }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="dark:border-neutral-300">
            {categories.map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-50 dark:hover:bg-neutral-600 transition duration-200"
              >
                <td className="border px-6 py-4 dark:border-neutral-500 dark:text-gray-300">{category.name}</td>
                <td
                  className="border px-2 py-4 flex justify-center items-center gap-6 dark:border-neutral-500"
                  style={{ width: "80px" }}
                >
                  <button
                    aria-label="Edit"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                  >
                    <MdModeEdit fontSize={20} />
                  </button>
                  <button
                    aria-label="Delete"
                    className="text-red-500 hover:text-red-700 ml-2 dark:text-red-400 dark:hover:text-red-600"
                    onClick={() => isDeleteModalOpen(true)}
                  >
                    <AiFillDelete fontSize={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => setIsAddModalOpen(false)}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Add Category</h2>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Category Name"
              className="w-full px-4 py-2 mb-0.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-gray-200"
            />
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm"><BiCommentError /> {error}</div>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-2"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div>
            console.log("ppppppppppp")
          </div>
        </div>
      )}
    </div>
  );
}
