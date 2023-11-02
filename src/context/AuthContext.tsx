import { createContext } from 'react';

//Asi debe lucir mi informacion de Login
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    jwtoken: string | undefined;
}

//Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    jwtoken: undefined
}
//Como dee lucir y exporner el context
export interface AuthContextProps {
    authState: AuthState,
    singIn: () => void
}
//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveeodr del estado
export const AuthProvider = ({ children }: any) => {
    return (
        <AuthContext.Provider
            value={{
                authState: authInitialState,
                singIn: () => { }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}