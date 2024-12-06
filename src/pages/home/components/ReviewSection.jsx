import { motion } from "framer-motion";

const ReviewSection = () => {
    const reviews = [
        { name: "Abraham Bartoloni", comment: "¡Lo apruebo!", link: "https://www.linkedin.com/in/abraham-bartoloni/", position: "Desarrollador Backend", company: "Tech Solutions" },
        { name: "Mateo Calvo", comment: "¡Un Tipazo!", link: "https://www.linkedin.com/in/mateo-calvo-9791242a7/", position: "Desarrollador Frontend", company: "Innovative Tech" },
        { name: "Pedro Pedro Pedro", comment: "¡Que agradable sujeto!", link: "https://www.linkedin.com/in/pedro", position: "Full Stack Developer", company: "Creative Labs" },
    ];

    return (
        <motion.section
            className="py-16 bg-base-100 text-base-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Reseñas</h2>

                {/* Grid con animaciones */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    layout
                    transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="p-6 shadow-lg bg-ghost rounded-lg"
                            layout
                        >
                            <h3 className="font-bold text-lg">
                                <a href={review.link} target="_blank" rel="noopener noreferrer" className="underline">
                                    {review.name}
                                </a>
                            </h3>
                            <p className="text-sm text-gray-500">{review.position} - {review.company}</p>
                            <p className="text-sm mt-2">{review.comment}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ReviewSection;