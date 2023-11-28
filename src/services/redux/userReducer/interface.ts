export interface ReducerState {
  userData: loginPayload;
  isLogin: boolean;
  token: string | undefined;
  DarkTheme: boolean;
}

export interface loginPayload {
  __v?: number;
  _id?: string;
  aadharDocument?: string;
  bankDetails?: BankDetails;
  business_details?: BusinessDetails;
  country_code?: string;
  createdAt?: string;
  gstDocument?: string;
  is_verified?: boolean;
  mobile_number?: string;
  otp?: number;
  panDocument?: string;
  personal_details?: PersonalDetails;
  updatedAt?: string;
}

export interface BankDetails {
  IFSCCode?: string;
  accountNumber?: string;
  bankName?: string;
  passbookDocumnet?: string;
}

export interface BusinessDetails {
  business_address?: string;
  business_type?: string;
  register_business_name?: string;
}

export interface PersonalDetails {
  country?: string;
  email?: string;
  full_name?: string;
  permanent_address?: string;
  state?: string;
}
