import { faTrashAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserData from "./UserData";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className="my-5">
      <Container className="mt-5">
        <Table variant="light" striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>SL No.</th>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>Name</th>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>Id</th>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>Make Admin</th>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>Delete user</th>
              ))}
            </tr>
          </thead>
          {users?.map((user) => (
            <UserData refetch={refetch} key={user._id} user={user}></UserData>
          ))}
        </Table>
      </Container>
    </Container>
  );
};

export default AllUsers;
