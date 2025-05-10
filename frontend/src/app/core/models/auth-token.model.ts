export interface AuthToken {
    iat: number;
    exp: number;
    username: string;
    roles: string[];
}