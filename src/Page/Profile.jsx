import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, setUser, updateUserProfile } = use(AuthContext);
  const allAds = useLoaderData();
  const myAds = allAds.filter((ads) => ads.email == user.email);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateUserProfile({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        Swal.fire({
          title: "Great!",
          text: "You update your profile successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        //console.log(error);
        toast.error(error);
        setUser(user);
      });
  };

  const slightFadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Helmet>
          <title>Profile & Overview | Find Mate</title>
        </Helmet>
        <Fade direction="down" keyframes={slightFadeDown}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center bg-gradient-to-r from-gray-400 to-gray-700 py-12 px-6 rounded-lg shadow-lg text-white">
              <h2 className="text-5xl font-extrabold mb-4">
                Total Ad : {allAds.length}
              </h2>
            </div>

            <div className="text-center bg-gradient-to-r from-gray-400 to-gray-700 py-12 px-6 rounded-lg shadow-lg text-white">
              <h2 className="text-5xl font-extrabold mb-4">
                My Posts : {myAds.length}
              </h2>
            </div>
          </div>
        </Fade>
        <div className="mt-20 grid grid-cols-1 items-center">
          <Fade direction="down" keyframes={slightFadeDown}>
            <div className="flex flex-col items-center gap-8 md:mb-6">
              <img className="w-92 rounded-2xl" src={user.photoURL} alt="" />
              <h1 className="font-bold text-3xl">
                Name : {user && user.displayName}
              </h1>
              <p className="text-xl">Email : {user.email}</p>
            </div>
          </Fade>
          <Fade direction="down" keyframes={slightFadeDown}>
            <p className="text-center my-6 text-2xl font-bold">
              Update your Profile
            </p>
          </Fade>
          <Fade direction="down" keyframes={slightFadeDown}>
            <div className="mt-8 md:mt-0">
              <form
                onSubmit={handleUpdateUser}
                className="bg-gray-400 p-10 rounded-2xl space-y-6"
              >
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="username"
                    className="block dark:text-gray-600"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="username"
                    placeholder="Username"
                    required
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block text-gray-600">Photo URL</label>
                  <input
                    type="text"
                    name="photoURL"
                    id="photoURL"
                    placeholder="Photo URL"
                    required
                    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>

                <button
                  type="submit"
                  className="block w-full p-3 mt-10 text-white text-center rounded-sm text-xl bg-black cursor-pointer"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Profile;
