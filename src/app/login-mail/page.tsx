import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <form className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <div className="flex">
                <button formAction={login} className="mr-2">Log in</button>
                <button formAction={signup}>Sign up</button>
            </div>
        </form>
    );
}
