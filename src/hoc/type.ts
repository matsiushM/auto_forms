// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AuthContextType {
    user: string;
    sinIn: (newUser: string, cd: () => void) => void;
}