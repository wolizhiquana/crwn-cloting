import { RootState } from "../store";
import { UserState } from "./user.reducer";

export const selectCurrentUser = (state: RootState): UserState["currentUser"] =>
  state.user.currentUser;
