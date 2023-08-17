import * as yup from "yup";

export const schoolSchema = yup.object().shape({
  name: yup.string().required("Required"),
  course: yup.string().required("Required"),
});
