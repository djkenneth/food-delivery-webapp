"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import AuthScreen from "../screens/AuthScreen";
// import useUser from "../../hooks/useUser";
// import toast from "react-hot-toast";
// import Cookies from "js-cookie";
// import { signOut, useSession } from "next-auth/react";
// import { registerUser } from "../../actions/register-user";

const ProfileDropDown = () => {
  const [signedIn, setsignedIn] = useState(false);
  const [open, setOpen] = useState(false);
//   const { user, loading } = useUser();
//   const { data } = useSession();

//   useEffect(() => {
//     if (!loading) {
//       setsignedIn(!!user);
//     }
//     if (data?.user) {
//       setsignedIn(true);
//       addUser(data?.user);
//     }
//   }, [loading, user, open, data]);

  const logoutHandler = () => {
    // if (data?.user) {
    //   signOut();
    // } else {
    //   Cookies.remove("access_token");
    //   Cookies.remove("refresh_token");
    //   toast.success("Log out successful!");
    //   window.location.reload();
    // }
  };

  const addUser = async (user: any) => {
    // await registerUser(user);
  };

  return (
    <div className="flex items-center gap-4">
      {signedIn ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="logo"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">
                dj.kenneth.pineda@gmail.com
              </p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="all_orders">All Orders</DropdownItem>
            <DropdownItem key="team_settings">
              Apply for seller account
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => logoutHandler()}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <CgProfile
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}
      {open && <AuthScreen setOpen={setOpen} />}
    </div>
  );
};

export default ProfileDropDown;