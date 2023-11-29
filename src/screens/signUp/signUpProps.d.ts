export interface signUpHookProps {}

interface signUpProps {}

type errorMessage = {
  email: string | null;
  password: string | null;
  fullName: string | null;
  mobileNumber: string | null;
};

type formDataType = {
  [name: string]: string | undefined;
};
