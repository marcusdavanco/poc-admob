import { useForm } from "react-hook-form";

export function useAuth() {
    const {        
        handleSubmit: handleSubmitSignIn,
        control: controlSignIn,
        formState: { errors: errorsSignIn },        
    } = useForm();

    const onSubmitSignIn = () => {
        // TODO
    };

    const {        
        handleSubmit: handleSubmitSignUp,
        control: controlSignUp,
        formState: { errors: errorsSignUp },        
    } = useForm();

    const onSubmitSignUp = () => {
        // TODO
    };

    return {
        handleSubmitSignIn,
        controlSignIn,
        errorsSignIn,
        onSubmitSignIn,
        handleSubmitSignUp,
        controlSignUp,
        errorsSignUp,
        onSubmitSignUp,
    };
}
