import { toast } from "react-hot-toast"

/** validate email */
const emailVerify = (error = {}, values) => {
  if (!values.email)
    error.email = toast.error("Email Required...!");
  else if (values.email.includes(" "))
    error.email = toast.error("Wrong Email...!")
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    error.email = toast.error("Invalid email address...!")

  return error;
}


/**
 * Validate username
 */
const usernameVerify = (values, error = {}) => {

  if (!values.username)
    error.username = toast.error("Username is required")
  else if (values.username.includes(" "))
    error.username = toast.error("Invalid username")

  return error
}

/**
 * login page username validation
 */
export const usernameValidate = async (values) => {
  let error = {}

  error = usernameVerify(values, {})

  return error
}


/**
 * password verification
 */
const passwordVerify = (values, error = {}) => {

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

  if (!values.password)
    error.password = toast.error("Password is required")
  else if (values.password.includes(" "))
    error.password = toast.error("Invalid password")
  else if (values.password.length < 6)
    error.password = toast.error("Password must be at least 6 characters")
  else if (passwordRegex.test(values.password) === false)
    error.password = toast.error("Password must contain at least one uppercase letter, one lowercase letter and one number")

  return error
}

/**
 * password validation
 */
export const passwordValidate = async (values) => {
  let error = {}

  error = passwordVerify(values, {})

  return error
}

/**
 * reset password validation
 */
export const resetPasswordValidation = async (values) => {

  const error = passwordVerify(values, {})

  if (!values.confirm_pwd)
    error.confirm_pwd = toast.error("Confirm password is required")
  else if (values.confirm_pwd !== values.password)
    error.confirm_pwd = toast.error("Passwords do not match")

  return error
}

/** validate register form */
export const registerValidation = async (values) => {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}