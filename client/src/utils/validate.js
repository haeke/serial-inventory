export const validate = values => {
  let errors = {};
  // This function will check to see if the values that were past are not empty. Ensure that the softwarename, software company, serial number and date aquired fields are not empty. If so, we can use the error object to indicate this to the user.
  if (!values.softwareName) {
    errors.softwareName = "The Software Name Field is required";
  }

  if (!values.softwareCompany) {
    errors.softwareCompany = "The Company Name Field is required.";
  }

  if (!values.serialNumber) {
    errors.serialNumber = "The Serial Key Field is required.";
  }

  if (!values.dateAquired) {
    errors.dateAquired = "The Date Aquired Field is required.";
  }

  if (!values.name) {
    errors.name = "The Name Field is required.";
  }

  if (!values.password2) {
    errors.password2 = "The Password Confirm Field is required";
  }

  return errors;
};

export const validateLogin = values => {
  let errors = {};
  if (!values.email) {
    errors.email = "The Email Field is required.";
  }

  if (!values.password) {
    errors.password = "The Password Field is required";
  }

  return errors;
};
