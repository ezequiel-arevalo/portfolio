import { Verified, Lock } from "lucide-react"

export const EducationSection = () => {
    return (
        <section className="mx-auto text-center">
            <h2 className="text-lg mb-3">Mi Educación</h2>
            <ul className="timeline timeline-vertical">
                <li>
                    <time className="timeline-start font-mono">2022</time>
                    <div className="timeline-middle">
                        <Verified />
                    </div>
                    <div className="timeline-end timeline-box">Primer Año de carrera</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <time className="timeline-start font-mono">2023</time>
                    <div className="timeline-middle">
                        <Verified />
                    </div>
                    <div className="timeline-end timeline-box">Segundo Año de carrera</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <time className="timeline-start font-mono">2024</time>
                    <div className="timeline-middle">
                        <Verified />
                    </div>
                    <div className="timeline-end timeline-box">
                        <h3 className="text-md text-left font-black">First Macintosh computer</h3>
                        <ul className="text-left list-disc px-5">
                            <li>
                                Ubicación: Argentina
                            </li>
                            <li>
                                Idioma: Español
                            </li>
                        </ul>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <time className="timeline-start font-mono">2025</time>
                    <div className="timeline-middle">
                        <Lock />
                    </div>
                    <div className="timeline-end timeline-box">Cooming Soon...</div>
                    <hr />
                </li>
            </ul>
        </section >
    )
}
