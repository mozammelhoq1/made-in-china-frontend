import { faTrashAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";

const UserData = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())

      .then((data) => {
        refetch();
        toast.success(`Successfully made an admin`);
      });
  };
  return (
    <tbody>
      <tr className="text-center">
        {Array.from({ length: 1 }).map((_, index) => (
          <td key={index}>1</td>
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <td key={index}>{user?.email}</td>
        ))}

        {Array.from({ length: 1 }).map((_, index) => (
          <td key={index}>{user?._id} </td>
        ))}

        {Array.from({ length: 1 }).map((_, index) => (
          <td key={index}>
            {role !== "admin" ? (
              <Button onClick={makeAdmin} className="border-0 p-0 bg-dark">
                <FontAwesomeIcon icon={faUserShield} />
              </Button>
            ) : (
              "Admin"
            )}
          </td>
        ))}

        {Array.from({ length: 1 }).map((_, index) => (
          <td key={index}>
            <Button className="border-0 p-0 bg-dark">
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </td>
        ))}
      </tr>
    </tbody>
  );
};

export default UserData;
