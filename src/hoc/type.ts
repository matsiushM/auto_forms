interface AuthContextType {
    user: string; // Или конкретный тип, например, { id: string, name: string }
    singIn: (newUser: string, cd: () => void) => void;
}