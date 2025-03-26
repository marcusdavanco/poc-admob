import { useForm } from "react-hook-form";

export function useAuth() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    return {
        register,
        handleSubmit,
        control,
        errors,
    };
}
