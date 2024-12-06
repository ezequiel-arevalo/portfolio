import { useTranslation } from "react-i18next";
import { Book, Hammer, Brain, Package, Lightbulb, School, Star } from 'lucide-react';

export const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-ghost text-ghost-content overflow-hidden">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-semibold mb-4 mt-8">{t("about.title")}</h1>
                    <div className="divider"></div>
                </div>

                <section className="text-center mb-8">
                    <blockquote className="text-lg italic font-medium">
                        "{t("about.quote.text")}"
                    </blockquote>
                    <cite className="block mt-4 text-sm text-gray-500">— {t("about.quote.author")}</cite>
                </section>

                <section className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <Brain className="w-6 h-6 text-purple-500" />
                        <h2 className="text-2xl font-semibold">{t("about.skills.title")}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Técnicas */}
                        <div className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5" />
                                    {t("about.skills.technical.title")}
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>{t("about.skills.technical.frontend")}</li>
                                    <li>{t("about.skills.technical.tools")}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Blandas */}
                        <div className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Star className="w-5 h-5" />
                                    {t("about.skills.soft.title")}
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {t("about.skills.soft.items", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Metodologías ágiles */}
                        <div className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Star className="w-5 h-5" />
                                    {t("about.skills.methods.title")}
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {t("about.skills.methods.items", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Idiomas */}
                        <div className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Star className="w-5 h-5" />
                                    {t("about.skills.lang.title")}
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {t("about.skills.lang.items", { returnObjects: true }).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <School className="w-6 h-6 text-blue-500" />
                        <h2 className="text-2xl font-semibold text-center">{t("about.education.title")}</h2>
                    </div>

                    <div>
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">2022 - 2024</time>
                                    <div className="text-lg font-black">{t("about.education.certifications.title")}</div>
                                    <ul className="list-none">
                                        {t("about.education.certifications.items", { returnObjects: true }).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 md:text-end">
                                    <time className="font-mono italic">2025</time>
                                    <div className="text-lg font-black">{t("about.education.future.title")}</div>
                                    <ul className="list-none">
                                        {t("about.education.future.items", { returnObjects: true }).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <Hammer className="w-6 h-6 text-orange-500" aria-hidden="true" />
                        <h2 className="text-2xl font-semibold">{t("about.tools.title")}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <article className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Package className="w-5 h-5" aria-hidden="true" />
                                    {t("about.tools.development.title")}
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.development.items.figma")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://miro.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.development.items.miro")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://trello.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.development.items.trello")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://slack.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.development.items.slack")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <article className="card bg-ghost shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title flex items-center gap-2">
                                    <Book className="w-5 h-5" aria-hidden="true" />
                                    {t("about.tools.educational.title")}
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.educational.items.mdn")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.educational.items.roadmap")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.educational.items.frontendMentor")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="underline">
                                            {t("about.tools.educational.items.leetcode")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    );
};
