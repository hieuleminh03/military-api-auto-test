import api from '../../lib/api.js';

export default async () => {
    const email = "admin@example.com";
    const password = "admin123";

    try {
        const data = await api.auth.login(email, password);
        console.log("Token:", data.token);
    } catch (error) {
        throw error;
    }
};
