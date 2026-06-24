import { toast } from "react-toastify";

export const handleError = (error) => {
  toast.error(error || "Unexpected Error");
};