import BasicDetails from "./BasicDetails";
import PersonalDetails from "./PersonalDetails";
import UserNavigation from "./UserNavigation";
import { useParams } from "react-router-dom";
import { IUser } from "users/types";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  const allUsers = JSON.parse(localStorage.getItem("userData") || "[]");

  const userInfo = allUsers.find((item: IUser) => {
    return item.id === userId;
  }) as IUser;

  return (
    <>
      <UserNavigation />
      <BasicDetails userInfo={userInfo} />
      <PersonalDetails userInfo={userInfo} />
    </>
  );
};

export default UserDetails;
