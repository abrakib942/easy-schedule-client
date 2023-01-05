import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUserEvents = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: userEvents,
    refetch,
  } = useQuery(["eventsData"], () =>
    fetch(
      `https://easy-schedule-backend-production.up.railway.app/event/group/${user?.email}`
    ).then((res) => res.json())
  );

  return { isLoading, error, userEvents, refetch };
};

export default useUserEvents;
