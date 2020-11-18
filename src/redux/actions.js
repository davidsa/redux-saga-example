export const getUsersAction = () => ({ type: "GET_USERS" });

export const getUsersSuccessAction = (payload) => ({
  type: "GET_USERS_SUCCESS",
  payload,
});
