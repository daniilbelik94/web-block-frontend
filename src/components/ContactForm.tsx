// src/components/ContactForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, TextField, Button, Stack, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

interface IFormInput { name: string; email: string; message: string; }

const ContactForm: React.FC = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
        try {
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || t('contactForm.error.generic'));
            toast.success(t('contactForm.success'));
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error(error instanceof Error ? error.message : t('contactForm.error.generic'));
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
                // Адаптивная ширина с вашими значениями, но 100% на xs
                width: { xs: '100%', sm: '420px', md: '480px', lg: '580px' },
                // Центрируем только на sm и шире, убираем общий margin: '0 auto'
                mx: { xs: 0, sm: 'auto' }, // На xs без авто-отступов, на sm+ центрируем
                maxWidth: '100%', // Гарантируем, что не вылезет за пределы родителя на xs
            }}
        >
            <Stack spacing={3}>
                {/* Поля TextField */}
                <TextField
                    label={t('contactForm.nameLabel', 'Ваше имя')}
                    variant="outlined"
                    fullWidth
                    required
                    {...register('name', { required: t('contactForm.validation.nameRequired') })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    disabled={isSubmitting}
                />
                <TextField
                    label={t('contactForm.emailLabel', 'Ваш Email')}
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    {...register('email', {
                        required: t('contactForm.validation.emailRequired'),
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: t('contactForm.validation.emailInvalid') }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    disabled={isSubmitting}
                />
                <TextField
                    label={t('contactForm.messageLabel', 'Сообщение')}
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={6}
                    {...register('message', { required: t('contactForm.validation.messageRequired') })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    disabled={isSubmitting}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    sx={{ alignSelf: 'flex-start' }}
                >
                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : t('contactForm.submitButton', 'Отправить')}
                </Button>
            </Stack>
        </Box>
    );
};

export default ContactForm;