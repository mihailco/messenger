import create from "zustand";
import { AuthPageStates, SignInState, SignUpState, LoadingState, ErrorState } from "./auth_page_states"
// во флаттере и использовал кубит
//и кубит соединял с юзкейсами в домене,
//а после их с внешним источником данных
//тут также?
type Store = {
    states: AuthPageStates
    setSignIn: () => void
    setSignUp: () => void
    setLoading: () => void
    setError: () => void
}
const useStore = create<Store>((set) => ({
    states: SignUpState,
    setSignIn: () => set(state => ({states: SignInState})),
    setSignUp: () => set(state => ({states: SignUpState})),
    setLoading: () => set(state => ({ states: LoadingState })),
    setError: () => set(state => ({ states: ErrorState })),
}))
export default useStore;