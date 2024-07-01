import { useEffect, useState } from "react";
import images from "../../assets/img/assets";
import { Fade } from "react-awesome-reveal";
import axios from "../../api/axios";
import api from "../../services/api";
import ProfileModal from "../../components/Profile/ProfileModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import { toast } from "react-toastify";

const PROFILE_URL = "/me";
const UPDATE_PROFILE_URL = '/profile';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({});
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token.replace(/"/g, "")}` },
      };

      const response = await axios.get(PROFILE_URL, config);
      setUser(response.data[0]);
      setProfileImage(response.data.image);
      setProfileData({
        name: response.data[0].name,
        phone: response.data[0].phone || '',
        image: response.data.image || null,
      });
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch profile");
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };

  const handleSave = async (newData) => {
    try {
      const token = sessionStorage.getItem("token");
      const formData = new FormData();

      formData.append("name", newData.name);
      formData.append("phone", newData.phone);
      if (newData.image) {
        formData.append("user-image", newData.image);
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token.replace(/"/g, "")}`,
        },
      };

      const response = await axios.post(UPDATE_PROFILE_URL, formData, config);

      setUser(response.data.user);
      setProfileImage(response.data.image); // Update profile image
      setProfileData({
        name: response.data.user.name,
        phone: response.data.user.phone,
        image: response.data.image || null,
      });
      setIsModalOpen(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("An error occurred:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Failed to update profile.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb Area Start */}
      <Fade
        delay={1e2}
        cascade
        triggerOnce
        damping={1e-1}
        className="px-4 md:px-12 leading-tight bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.banner1})` }}
      >
        <div className="h-[250px] md:h-[400px] flex justify-center items-center pt-20 md:pt-36">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content text-center">
                <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                  <h2 className="text-white uppercase font-semibold mb-1 md:mb-3 text-[24px] md:text-4xl 2xl:text-5xl">
                    Your Profile Details
                  </h2>
                  <ul className="flex justify-center items-center text-white 2xl:text-2xl font-[500]">
                    <li>
                      <a href="/" className="hover:text-black">
                        Home
                      </a>
                    </li>
                    <span className="mx-2">&gt;</span>
                    <li>Profile</li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Booking Section Details */}
      <section className="md:w-full 2xl:w-9/12 py-8 md:py-20 mx-auto px-4 md:px-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-48 sm:h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Profile Cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          <div className="relative px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full border-4 border-white object-cover mr-4"
                src={
                  profileImage ||
                  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                }
                alt="Profile"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {user.phone ? user.phone : "No Phone Number Added"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Edit Profile
            </button>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                Personal info
              </h4>
              <dl className="space-y-2">
                <div className="flex items-center">
                  <dt className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="h-4 w-4 text-gray-400"
                    />
                  </dt>
                  <dd className="ml-3">
                    <span className="font-medium text-gray-900">Email:</span>
                    <span className="ml-2 text-gray-500">{user.email}</span>
                  </dd>
                </div>
                <div className="flex items-center">
                  <dt className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="h-4 w-4 text-gray-400"
                    />
                  </dt>
                  <dd className="ml-3">
                    <span className="font-medium text-gray-900">Phone:</span>
                    <span className="ml-2 text-gray-500">
                      {user.phone ? user.phone : "No Phone Number Added"}
                    </span>
                  </dd>
                </div>
                <div className="flex items-center">
                  <dt className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="h-4 w-4 text-gray-400"
                    />
                  </dt>
                  <dd className="ml-3">
                    <span className="font-medium text-gray-900">
                      Created At:
                    </span>
                    <span className="ml-2 text-gray-500">
                      {new Date(user.created_at).toLocaleString()}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex justify-end h-full items-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between py-5">
            <h2 className="text-xl font-medium text-slate-700">
              Recent Reservations
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Reservation card */}
            <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
              <img
                src={images.workspace1}
                className="h-48 w-full object-cover object-center"
                alt="Workspace"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Private Office
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  Our private offices are perfect for teams of 1-100 and are
                  fully serviced so you can focus on your business.
                </p>

                <a
                  href="#"
                  className="block text-center bg-teal-500 hover:bg-teal-600 transition-colors duration-300 text-white font-medium px-4 py-2 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Reservation card */}
            <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
              <img
                src={images.workspace2}
                className="h-48 w-full object-cover object-center"
                alt="Workspace"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Private Office
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  Our private offices are perfect for teams of 1-100 and are
                  fully serviced so you can focus on your business.
                </p>

                <a
                  href="#"
                  className="block text-center bg-teal-500 hover:bg-teal-600 transition-colors duration-300 text-white font-medium px-4 py-2 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Reservation card */}
            <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
              <img
                src={images.workspace1}
                className="h-48 w-full object-cover object-center"
                alt="Workspace"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Private Office
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  Our private offices are perfect for teams of 1-100 and are
                  fully serviced so you can focus on your business.
                </p>

                <a
                  href="#"
                  className="block text-center bg-teal-500 hover:bg-teal-600 transition-colors duration-300 text-white font-medium px-4 py-2 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Reservation card */}
            <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
              <img
                src={images.workspace1}
                className="h-48 w-full object-cover object-center"
                alt="Workspace"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Private Office
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  Our private offices are perfect for teams of 1-100 and are
                  fully serviced so you can focus on your business.
                </p>

                <a
                  href="#"
                  className="block text-center bg-teal-500 hover:bg-teal-600 transition-colors duration-300 text-white font-medium px-4 py-2 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Reservation card */}
            <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
              <img
                src={images.workspace2}
                className="h-48 w-full object-cover object-center"
                alt="Workspace"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Private Office
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  Our private offices are perfect for teams of 1-100 and are
                  fully serviced so you can focus on your business.
                </p>

                <a
                  href="#"
                  className="block text-center bg-teal-500 hover:bg-teal-600 transition-colors duration-300 text-white font-medium px-4 py-2 rounded"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Reservation card */}
            <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
              <img
                src={images.workspace1}
                className="h-48 w-full object-cover object-center"
                alt="Workspace"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Private Office
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  Our private offices are perfect for teams of 1-100 and are
                  fully serviced so you can focus on your business.
                </p>

                <a
                  href="#"
                  className="block text-center bg-teal-500 hover:bg-teal-600 transition-colors duration-300 text-white font-medium px-4 py-2 rounded"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          initialData={profileData}
        />
      </section>
    </div>
  );
}