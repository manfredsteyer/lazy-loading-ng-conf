export abstract class AuthService {
    public abstract login(): void;
    public abstract logout(): void;
    public abstract get isLoggedIn(): boolean;
    public abstract get userName(): string;
}