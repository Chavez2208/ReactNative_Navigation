import { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

//Asi debe lucir mi informacion de Login
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    jwtoken: string | undefined;
    favoriteIcon?: string
}

//Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    jwtoken: undefined,
    favoriteIcon: undefined
}
//Como dee lucir y exporner el context
export interface AuthContextProps {
    authState: AuthState,
    singIn: () => void,
    changeFavIcon: (iconName: string) => void,
    login: (jwt: string) => void,
    logOut: () => void,
    changeName: (name: string) => void
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveeodr del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const singIn = () => {
        dispatch({ type: 'sigIn' })
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'cahngeFavIcon', payload: iconName })
    }

    const login = (jwt: string) => {
        dispatch({ type: 'Login', payload: jwt });
    }

    const logOut = () => {
        dispatch({ type: 'logout' })
    }

    const changeName = (name: string) => {
        dispatch({ type: 'changeName', payload: name });
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                singIn,
                changeFavIcon,
                login,
                logOut,
                changeName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}