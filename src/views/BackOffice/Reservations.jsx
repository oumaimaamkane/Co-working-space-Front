import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { BiCommentError } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { CgMoreO } from "react-icons/cg";
import Select from "react-select";
import axios from "axios";

export default function Reservations() {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updatedReservation, setUpdatedReservation] = useState({

  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingReservationId, setDeletingReservationId] = useState("");

  const [success, setSuccess] = useState("");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/reservations");
        setReservations(response.data);
      } catch (error) {
        setError("Failed to fetch reservations from the server");
      } finally {
        setLoading(false);
      }
    };


    fetchReservations();
  }, []);



  // Pagination
  const items = 4;
  const [CurrentPage, setCurrentPage] = useState(1);
  const NbPage = Math.ceil(reservations.length / items);
  const StartIndex = (CurrentPage - 1) * items;
  const EndIndex = StartIndex + items;
  const reservationsPerPage = reservations.slice(StartIndex, EndIndex);
  // Pagination functions
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };




  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-zinc-950 dark:border-zinc-50"></div>
      </div>
    );
  }

  // UPDATE RESERVATION
  const handleUpdateReservation = async (e) => {
    e.preventDefault();
    try {

      setSuccess("Reservation updated successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to update Reservation. Please try again.");
    }
  };


  // DELETE RESERVATION
  const handleDeleteReservation = async (reservationId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/reservation/${reservationId}`);
      setReservation(reservations.filter((reservation) => reservation.id !== reservationId));
      setIsDeleteModalOpen(false);
      setSuccess("reservation deleted successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (error) {
      setError("Failed to delete reservation. Please try again.");
    }
  };

  return (
    <div className="p-6 min-h-screen dark:bg-neutral-800">
      <div className="flex justify-between items-center py-3 px-8 bg-white dark:bg-neutral-600 rounded-lg shadow-md mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          List des Reservations
        </span>

      </div>
      {success && (
        <div className="bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 p-4 rounded-lg shadow-md mb-4">
          {success}
        </div>
      )}
      {error && (
        <div className="bg-red-100 dark:bg-red-200 text-red-800 dark:text-red-900 p-4 rounded-lg shadow-md mb-4">
          {error}
        </div>
      )}

      <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-lg">
        <table className="min-w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-800">
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center">
                #
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center">
                UserName
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center">
                EspaceId
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Status
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Check In
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Check Out
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-left">
                Total Price
              </th>
              <th className="px-4 py-3 text-gray-800 dark:text-gray-100 font-semibold text-xs tracking-wide text-center dark:border-neutral-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reservationsPerPage.map((reservation, index) => (
              <tr
                key={reservation.id}
                className="hover:bg-gray-50 border-t dark:hover:bg-neutral-700 transition-colors duration-200"
              >
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 flex justify-center">

                  
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {reservation.category.name}
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {reservation.capacity}
                  <span className="text-sm"> people</span>
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {reservation.status}
                </td>
                <td className="px-4 py-3 dark:border-neutral-700 dark:text-gray-300 text-left">
                  {reservation.price}
                  <span className="text-sm"> MAD</span>
                </td>
                <td className="px-4 dark:border-neutral-700 flex justify-center gap-4">
                  <button
                    aria-label="Update"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800"
                    onClick={() => setIsUpdateModalOpen(true)}
                  >
                    <MdModeEdit fontSize={18} />
                  </button>
                  <button
                    aria-label="Delete"
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 transition-colors rounded-full hover:bg-red-50 dark:hover:bg-neutral-800"
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setDeletingReservationId(reservation.id);
                    }}
                  >
                    <AiFillDelete fontSize={19} />
                  </button>
                  <button
                    aria-label="Details"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800"
                  >
                    <CgMoreO fontSize={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-end gap-8 items-center mt-4">
          <button
            onClick={prevPage}
            disabled={CurrentPage === 1}
            className={`flex items-center text-gray-800 dark:text-gray-100 hover:text-zinc-950 dark:hover:text-zinc-950 cursor-pointer ${
              CurrentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeftIcon className="h-5 w-5 mr-1" />
            Previous
          </button>
          <div className="text-gray-600 dark:text-gray-200">
            Page {CurrentPage} of {NbPage}
          </div>
          <button
            onClick={nextPage}
            disabled={EndIndex >= reservations.length}
            className={`flex items-center text-gray-800 dark:text-gray-100 hover:text-zinc-950 dark:hover:text-zinc-950 cursor-pointer ${
              EndIndex >= reservations.length ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

{/* Update Modal */}
{isUpdateModalOpen && (
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div
        className="inline-block align-bottom bg-white dark:bg-neutral-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
            onClick={() => setIsUpdateModalOpen(false)}
          >
            <span className="sr-only">Close</span>
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <h2
              className="text-2xl font-semibold mb-6 dark:text-white"
              id="modal-headline"
            >
              Update Reservation
            </h2>
            <form onSubmit={(e) => handleUpdateReservation(e, reservationId)} className="mt-5">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              </div>

              <div className="mt-5 sm:mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-1 sm:text-sm"
                  onClick={() => {
                    setIsUpdateModalOpen(false);
                    setError("");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                  onClick={(e) => handleUpdateReservation(e, reservationId)}
                >
                  Update Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
              onClick={() => {
                setIsDeleteModalOpen(false);
                setError("");
              }}
            >
              <FiX fontSize={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Delete Reservation
            </h2>
            <p className="text-md mb-4 dark:text-white">
              Are you sure you want to delete the reservation{" "}
              <span className="text-red-500 font-bold">
                {deletingReservationId}
              </span>
              ?
            </p>
            {error && (
              <div className="flex items-center gap-2 text-red-800 dark:text-red-500 px-1 rounded-lg text-sm">
                <BiCommentError /> {error}
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-2"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                onClick={() => handleDeleteReservation(deletingReservationId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
