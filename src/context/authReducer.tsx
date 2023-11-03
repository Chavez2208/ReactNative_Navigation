import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'sigIn' }
    | { type: 'cahngeFavIcon', payload: string }
    | { type: 'Login', payload: string }
    | { type: 'logout' }
    | { type: 'changeName', payload: string }

export const authReducer = (state: AuthState, accion: AuthAction): AuthState => {
    switch (accion.type) {
        case "sigIn":
            return {
                ...state,
                isLoggedIn: true,
                userName: 'Ricardo',
                jwtoken: 'token'
            }
        case "cahngeFavIcon":
            return {
                ...state,
                favoriteIcon: accion.payload
            }
        case "Login":
            return {
                ...state,
                jwtoken: accion.payload
            }
        case "logout":
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                jwtoken: undefined,
                favoriteIcon: undefined
            }
        case "changeName":
            return {
                ...state,
                userName: accion.payload,
            }
        default:
            return state
    }
}