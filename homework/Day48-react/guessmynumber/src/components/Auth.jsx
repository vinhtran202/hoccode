import Login from "./Login";
import { useDispatch, useSelector } from "../store/hook";
import Profile from "./Profile";
import { useEffect } from "react";
import { profileRequest } from "../utils/profileRequest";

export default function Auth() {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setUser = async () => {
    try {
      if (localStorage.getItem("login_token")) {
        const { access_token: accessToken } = JSON.parse(
          localStorage.getItem("login_token")
        );
        const user = await profileRequest(accessToken);
        if (!user) {
          throw new Error("Token error");
        }
        dispatch({
          type: "auth/set_user",
          payload: user,
        });
      } else {
        throw new Error("Token not exist");
      }
    } catch {
      dispatch({ type: "auth/destroy_user" });
      localStorage.removeItem("login_token");
    }
  };
  useEffect(() => {
    setUser();
  }, [isAuthenticated]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="container">{isAuthenticated ? <Profile /> : <Login />}</div>
  );
}
