import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AllStudySession = () => {
  const secureAxios = useAxiosSecure();
  const [localSessions, setLocalSessions] = useState([]);

  // Fetch all study sessions
  const { data: sessions = [], refetch } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const res = await secureAxios.get("/sessions");
      setLocalSessions(res.data); // Save sessions to local state
      return res.data;
    },
  });

  // Common function to handle status updates
  const updateSessionStatus = async (item, status) => {
    const action = status === "approved" ? "Approve" : "Reject";
    Swal.fire({
      title: `Are you sure you want to ${action.toLowerCase()} this session?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${action}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios
          .patch(`/sessions/${item._id}`, { status }) // Send status dynamically
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              // Remove the rejected session from local state
              if (status === "rejected") {
                setLocalSessions((prev) =>
                  prev.filter((session) => session._id !== item._id)
                );
              } else {
                refetch(); // Refresh the data for approved sessions
              }
              Swal.fire({
                title: `${action}d!`,
                text: `The session has been ${action.toLowerCase()}d.`,
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error",
              text: "Failed to update the session. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-bold pb-3 border-b-2 border-yellow-500 w-3/12 mx-auto">
          All Study Sessions
        </h2>
        <p>Only admin can view All Study Sessions</p>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Session Name</th>
                <th>Tutor Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {localSessions.map((session, idx) => (
                <tr key={session._id}>
                  <th>{idx + 1}</th>
                  <td>{session.sessionTitle}</td>
                  <td>{session.tutorName}</td>
                  <td>{session.status}</td>
                  <td className="flex gap-2 text-lg">
                    {/* Reject Button */}
                    <button
                      onClick={() => updateSessionStatus(session, "rejected")}
                      className="hover:bg-red-600 hover:text-white p-2 rounded-full"
                    >
                      <FaTimes />
                    </button>
                    {/* Approve Button */}
                    <button
                      onClick={() => updateSessionStatus(session, "approved")}
                      className="hover:bg-green-600 hover:text-white p-2 rounded-full"
                    >
                      <FaCheck />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudySession;
