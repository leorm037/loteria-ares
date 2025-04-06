export interface UsuarioAutenticado {
    exp: number;
    iat: number;
    roles: string[];
    username: string;
}
