export const validate = values => {
  let errors = {};
  // This function will check to see if the values that were past are not empty. Ensure that the softwarename, software company, serial number and date aquired fields are not empty. If so, we can use the error object to indicate this to the user.
  console.log("the values called inside validate ", values);
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

  return errors;
};
