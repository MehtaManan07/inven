import { BaseResponse } from "../types";

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = BaseResponse & {
    data: {
        accessToken: string;
    };
};
