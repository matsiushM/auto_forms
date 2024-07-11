// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AuthContextType {
    user: string;
    singIn: (newUser: string, cd: () => void) => void;
}