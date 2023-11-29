export interface ReducerState {
  userData: loginPayload;
  isLogin: boolean;
  token: string | undefined;
  DarkTheme: boolean;
}

export interface loginPayload {
  full_name: string;
  mobile_name: string;
  email: string;
  password: string;
}
