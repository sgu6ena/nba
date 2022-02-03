import { useAppSelector } from "../redux/redux";

export function useAuth() {
  const { name, token, avatarUrl } = useAppSelector(state=>state.userReducer);

  return {
    isAuth: !!name,
    token,
    name,
    avatarUrl,
  };
}
