import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/myorders?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to sure delete this item?");

    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myOrders.filter((item) => item._id !== id);
          setMyOrders(remaining);
        });
    }
  };
  return (
    <Container className="my-5">
      <Container className="mt-5">
        {myOrders.length === 0 ? (
          <p className="text-center">" Why You cannot add any Product 😒?"</p>
        ) : (
          <Table variant="light" striped bordered hover responsive>
            <thead>
              <tr className="text-center">
                {Array.from({ length: 1 }).map((_, index) => (
                  <th key={index}>Image</th>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <th key={index}>Name</th>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <th key={index}>Price</th>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <th key={index}>Quantity</th>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <th key={index}>Id</th>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <th key={index}>Action</th>
                ))}
              </tr>
            </thead>
            {myOrders.map((product) => (
              <tbody key={product._id}>
                <tr className="text-center">
                  {Array.from({ length: 1 }).map((_, index) => (
                    <td key={index}>
                      <img width={50} src={product?.img} alt="" />{" "}
                    </td>
                  ))}
                  {Array.from({ length: 1 }).map((_, index) => (
                    <td key={index}>{product?.productName} </td>
                  ))}

                  {Array.from({ length: 1 }).map((_, index) => (
                    <td key={index}>
                      <sup>$</sup>
                      {product?.price}{" "}
                    </td>
                  ))}

                  {Array.from({ length: 1 }).map((_, index) => (
                    <td key={index}>{product?.quantity} </td>
                  ))}

                  {Array.from({ length: 1 }).map((_, index) => (
                    <td key={index}>{product?.productId} </td>
                  ))}

                  {Array.from({ length: 1 }).map((_, index) => (
                    <td key={index}>
                      <Button
                        onClick={() => handleDelete(product._id)}
                        className="border-0 p-0 bg-dark"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </Container>
    </Container>
  );
};

export default MyOrders;
