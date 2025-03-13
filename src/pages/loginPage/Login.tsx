import { useState } from 'react';
import "./Login.css"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2>Вход в систему</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-input-container">
                    <label htmlFor="email" className="login-label">Электронная почта</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Введите вашу почту"
                        required
                        className="login-input"
                    />
                </div>
                <div className="login-input-container">
                    <label htmlFor="password" className="login-label">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите ваш пароль"
                        required
                        className="login-input"
                    />
                </div>
                <button type="submit" className="login-button">Войти</button>
            </form>
        </div>
    );
};
