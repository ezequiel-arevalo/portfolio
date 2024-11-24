import { motion } from "framer-motion";

export const TextAreaField = ({
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
        <textarea
            name={fieldName}
            placeholder={placeholder}
            className="textarea textarea-bordered w-full"
            rows="4"
            value={value}
            onChange={onChange}
            required
        ></textarea>
    </motion.div>
);
