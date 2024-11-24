import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const SubmitButton = ({ fadeVariants }) => {
    const { t } = useTranslation();

    return (
        <motion.div initial="hidden" animate="visible" variants={fadeVariants} className="flex justify-center">
            <button
                type="submit"
                className="btn btn-wide text-base-content border-2 rounded-lg transition-colors duration-200">
                {t("form.submit")}
            </button>
        </motion.div >
    );
};
