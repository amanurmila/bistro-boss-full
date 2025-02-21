import React from "react";
import HomeTitle from "../Components/HomeTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = axiosSecure.patch(`/menu/${_id}`, menuItem);
      if ((await menuRes).data.modifiedCount > 0) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <HomeTitle heading="Update an Item" subHeading="Refresh a Info" />
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              defaultValue={name}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <div className="flex justify-center items-center gap-6">
            {/* Category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category!
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                defaultValue={price}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              defaultValue={recipe}
              className="textarea w-full h-32 textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="my-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn flex items-center bg-yellow-600">
            Update Menu Item
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateItem;
