import { motion } from "framer-motion";

export const InputField = ({
    fieldName,
    placeholder,
    label,
    value,
    onChange,
    fadeVariants,
}) => (
    <motion.div initial="hidden" animate="visible" variants={fadeVariants} className="mb-4">
        <pre data-prefix=">">
            <code>{label}</code>
        </pre>
        <input
            type={fieldName === "email" ? "email" : "text"}
            name={fieldName}
            placeholder={placeholder}
            className="input input-bordered w-full"
            value={value}
            onChange={onChange}
            required
        />
    </motion.div>
);
