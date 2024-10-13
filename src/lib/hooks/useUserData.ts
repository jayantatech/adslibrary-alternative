import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUserData } from "../redux/userSlice";

export const useUserData = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!data && !loading && !error) {
      dispatch(fetchUserData());
    }
  }, [dispatch, data, loading, error]);

  return { userData: data, loading, error };
};
