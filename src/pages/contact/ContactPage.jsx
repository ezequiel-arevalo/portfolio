import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputField } from "./components/InputField";
import { TextAreaField } from "./components/TextAreaField";
import { SubmitButton } from "./components/SubmitButton";

export const ContactPage = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const validateStep = (name, value) => {
        switch (name) {
            case "name":
                return value.length > 5;
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case "subject":
                return value.length > 5;
            case "message":
                return value.length > 5;
            default:
                return false;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
        if (validateStep(name, value)) {
            setStep((prev) => Math.max(prev, Object.keys(inputs).indexOf(name) + 2));
        } else {
            setStep(Object.keys(inputs).indexOf(name) + 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(t("form.submit"));
        setStep(1);
        setInputs({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="bg-ghost text-ghost-content max-w-2xl mx-auto p-4">
            <h1 className="text-center">{t("header.contact")}</h1>
            <div className="mt-4">
                <form onSubmit={handleSubmit}>
                    {step >= 1 && (
                        <InputField
                            step={step}
                            fieldName="name"
                            placeholder={t("form.name.placeholder")}
                            label={t("form.name.label")}
                            value={inputs.name}
                            onChange={handleChange}
                        />
                    )}

                    {step >= 2 && (
                        <InputField
                            step={step}
                            fieldName="email"
                            placeholder={t("form.email.placeholder")}
                            label={t("form.email.label")}
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    )}

                    {step >= 3 && (
                        <InputField
                            step={step}
                            fieldName="subject"
                            placeholder={t("form.subject.placeholder")}
                            label={t("form.subject.label")}
                            value={inputs.subject}
                            onChange={handleChange}
                        />
                    )}

                    {step >= 4 && (
                        <TextAreaField
                            step={step}
                            fieldName="message"
                            placeholder={t("form.message.placeholder")}
                            label={t("form.message.label")}
                            value={inputs.message}
                            onChange={handleChange}
                        />
                    )}

                    {step >= 5 && <SubmitButton label={t("form.submit")} />}
                </form>
            </div>
        </div>
    );
};
