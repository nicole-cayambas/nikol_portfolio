import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useEmailJS = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (templateParams) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSuccess(true);
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading, error, success };
};
