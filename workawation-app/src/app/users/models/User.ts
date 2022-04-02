export interface SignUpRequest {
    username: string;
    email: string;
    password: string;
    profilePic?: string;
    isAdmin?: boolean;
}


export interface SignUpResponse {
  message: string,
  user: {
        username: string;
        email: string;
        password: string;
        profilePic: string;
        isAdmin: boolean;
        _id: string;
        createdAt: string;
        updatedAt: string;
    }
}

export interface SignInRequest {
  email: string;
  password: string;
}
