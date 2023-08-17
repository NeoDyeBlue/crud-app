import * as yup from "yup";

export const employeeSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  middleName: yup.string(),
  lastName: yup.string().required("Required"),
  birthday: yup.date().required("Required"),
  civilStatus: yup.string().required("Required"),
  address: yup.string().required("Required"),
  color: yup.string(),
});
