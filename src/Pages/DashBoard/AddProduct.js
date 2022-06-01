import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imgStorageKey = "7c5214d532d559d7f5fcc36317258a82";

  const onSubmit = async (data) => {
    // post img to imgbb
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            price: parseInt(data.price),
            quantity: parseInt(data.quantity),
            img: img,
            description: data.description,
          };
          // post a product to mongodb
          fetch(`http://localhost:5000/product`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((item) => {
              if (item.insertedId) {
                toast.success("Product Added Successfully");
                reset();
              } else {
                toast.error("Failed to add product");
              }
            });
        }
      });
  };

  return (
    <Container>
      <h1 className="text-center my-5">Add New Product</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <Form.Text className="text-muted">
            {errors.name?.type === "required" && (
              <span className="text-danger">{errors.name.message}</span>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="$ 00"
            {...register("price", {
              required: {
                value: true,
                message: "price is Required",
              },
            })}
          />
          <Form.Text className="text-muted">
            {errors.price?.type === "required" && (
              <span className="text-danger">{errors.price.message}</span>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantity"
            {...register("quantity", {
              required: {
                value: true,
                message: "Quantity is Required",
              },
            })}
          />
          <Form.Text className="text-muted">
            {errors.quantity?.type === "required" && (
              <span className="text-danger">{errors.quantity.message}</span>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Upload a file"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <Form.Text className="text-muted">
            {errors.img?.type === "required" && (
              <span className="text-danger">{errors.img.message}</span>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add short description"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <Form.Text className="text-muted">
            {errors.description?.type === "required" && (
              <span className="text-danger">{errors.description.message}</span>
            )}
          </Form.Text>
        </Form.Group>

        <Button
          className="btn btn-sm btn-dark w-100 mb-2"
          variant="light"
          type="submit"
        >
          SUBMIT
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
