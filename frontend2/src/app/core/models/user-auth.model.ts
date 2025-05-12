export interface UserAuth {
    iat: number;
    exp: number;
    username: string;
    roles: string[];
}