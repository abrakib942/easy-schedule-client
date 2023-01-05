import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Navbar from "../../Home/components/Navbar/Navbar";
import LoadingAnimate from "../../Shared/LoadingAnimate";
const UserProfiledata = () => {
  const [user, isLoading] = useAuthState(auth);
  const { displayName, email } = user;
  // console.log(user);
  const [userProfile, setUserProfile] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "7fc3b735e6b7fba6fb529bd9ccdd4851";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        if (result.success) {
          const img = result.data.url;
          const userData = {
            _id: data._id,
            name: data.name,
            email: data.email,
            number: data.number,
            address: data.address,
            description: data.description,
            img: img,
          };
          // send to your database
          fetch(
            `https://easy-schedule-backend-production.up.railway.app/users/${email}`,
            {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },

              body: JSON.stringify(userData),
            }
          )
            .then((res) => res.json())
            // .then(inserted => {
            //     console.log(inserted)
            //     if (inserted.insertedId) {
            //         toast.success('Edit successfully')
            //         reset();
            //     }
            //     else {
            //         toast.error('Failed to edit');
            //     }
            // })
            .then((data) => {
              // console.log(data);
              setUserProfile(data);
              navigate("/dashboard/accountSetting");
              // console.log(data);
              // toast.success('Edit successfully')
              //     reset();
            });
          // console.log(data)
        }
      });
  };
  if (isLoading) {
    return <LoadingAnimate></LoadingAnimate>;
  }
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl fw-bold text-center p-2 font-bold">
            Edit User Profile
          </h2>
          <div className="form-control w-full max-w-xs">
            <label>
              <span className="label-text">Name</span>
            </label>
            <input
              value={user?.displayName}
              type="name"
              className="input input-bordered w-full max-w-xs p-2 m-2"
              {...register("name")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={user?.email}
              type="email"
              className="input input-bordered w-full max-w-xs p-2 m-2"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs p-2 m-2"
              {...register("number")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="address"
              className="input input-bordered p-2 m-2"
              {...register("address")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="mb-2 input input-bordered w-full max-w-xs p-2 m-2"
              placeholder="Description"
              {...register("description")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Edit"
          />
        </form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default UserProfiledata;
