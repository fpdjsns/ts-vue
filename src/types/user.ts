export interface UserResponse {
    data: User;
}

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}