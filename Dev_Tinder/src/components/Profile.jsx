import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utilites/UserSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    photoUrl: "",
    description: "",
  });
  const [inProgress,setinprogress]=useState(false)

  useEffect(() => {
    if (userSelector) {
      setProfile({
        firstName: userSelector.firstName || "",
        lastName: userSelector.lastName || "",
        age: userSelector.age || "",
        photoUrl: userSelector.photoUrl || "",
        description: userSelector.description || "",
      });
    }
  }, [userSelector]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setinprogress(true)
    e.preventDefault();

    try {
      const updateData = await axios.patch(
        "http://localhost:3000/profile/edit",
        profile,
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(updateData.data.data));
      setinprogress(false)
        toast.success(
               "Data has been saved."
            );
    } catch (e) {
      console.log(e.response?.data || e.message);
       setinprogress(false)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">

      <div className="flex flex-col lg:flex-row gap-10 items-center">

        {/* EDIT FORM */}
        <div className="card bg-base-200 w-full max-w-md shadow-xl">
          <div className="card-body">

            <h2 className="text-2xl font-bold text-center">
              Edit Profile
            </h2>

            <form onSubmit={handleSubmit}>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">
                  First Name
                </legend>

                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">
                  Last Name
                </legend>

                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">
                  Age
                </legend>

                <input
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">
                  Photo URL
                </legend>

                <input
                  type="text"
                  name="photoUrl"
                  value={profile.photoUrl}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">
                  Description
                </legend>

                <textarea
                  name="description"
                  value={profile.description}
                  onChange={handleChange}
                  className="textarea w-full"
                />
              </fieldset>

              <button
                type="submit"
                className="btn btn-primary w-full mt-5"
                disabled={inProgress}
                inProgess={inProgress}
              >
               {inProgress ? (
    <>
      <span className="loading loading-spinner loading-sm"></span>
      Saving...
    </>
  ) : (
    "Save Profile"
  )}
              </button>

            </form>
          </div>
        </div>

        {/* LIVE PREVIEW */}
        <div>
          <h2 className="text-xl font-bold text-center mb-4">
            Profile Preview
          </h2>

          <div className="card bg-neutral text-neutral-content w-80 shadow-xl overflow-hidden">

            <figure className="h-72 bg-base-300">
              <img
                src={
                  profile?.photoUrl ||
                  "https://static.vecteezy.com/system/resources/previews/045/944/199/non_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg"
                }
                alt={profile.firstName}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="card-body">

              <h2 className="card-title">
                {profile.firstName || "First Name"}{" "}
                {profile.lastName || "Last Name"}
              </h2>

              <p className="text-sm">
                Age: {profile.age || "--"}
              </p>

              <p className="opacity-80">
                {profile.description || "Your description will appear here"}
              </p>

          
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;