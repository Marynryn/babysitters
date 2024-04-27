// Экшен для начала процесса регистрации
export const registerRequest = () => ({
  type: "REGISTER_REQUEST",
});

// Экшен для успешной регистрации
export const registerSuccess = (userData) => ({
  type: "REGISTER_SUCCESS",
  payload: userData,
});

// Экшен для неудачной регистрации
export const registerFailure = (error) => ({
  type: "REGISTER_FAILURE",
  payload: error,
});

// Экшен для начала процесса входа в систему
export const loginRequest = () => ({
  type: "LOGIN_REQUEST",
});

// Экшен для успешного входа в систему
export const loginSuccess = (userData) => ({
  type: "LOGIN_SUCCESS",
  payload: userData,
});

// Экшен для неудачного входа в систему
export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

// Экшен для выхода из системы
export const logout = () => ({
  type: "LOGOUT",
});
