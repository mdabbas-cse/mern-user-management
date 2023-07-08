import { toast } from "react-hot-toast"

/**
 * login page username validation
 */
export const usernameValidate = (values) => {
  let error = {}

  error = usernameVerify(values, {})

  return error
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