export const OpinionSection = () => {
    return (
        <section className="mx-auto max-w-[800px] min-h-[580px] flex flex-col space-y-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Reflexiones Personales</h2>

            <div className="collapse collapse-plus bg-ghost shadow-lg">
                <input type="radio" name="my-accordion-3" id="motivacion" />
                <label htmlFor="motivacion" className="collapse-title text-xl font-medium">¿Qué te motivó a convertirte en desarrollador web?</label>
                <div className="collapse-content space-y-2">
                    <p>Desde pequeño me atrajeron las computadoras, ya sea a través de juegos o simplemente por su funcionamiento. Esa curiosidad fue una de las razones por las que me involucré en la tecnología.</p>
                    <p>Sin embargo, la verdadera motivación vino de mi tío. Siempre lo veía ayudar a las personas y manejar las computadoras con una habilidad impresionante. Su organización, conexión y calma fueron un modelo a seguir, lo que me inspiró a seguir esta carrera y trabajar en este campo.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-ghost shadow-lg">
                <input type="radio" name="my-accordion-3" id="ia" />
                <label htmlFor="ia" className="collapse-title text-xl font-medium">¿Qué opinas sobre la inteligencia artificial en el desarrollo web?</label>
                <div className="collapse-content space-y-2">
                    <p>Creo que la inteligencia artificial puede ser muy útil cuando se usa de manera adecuada.</p>
                    <p>Personalmente, la utilizo en mi vida diaria, especialmente para entender código o generar recursos como imágenes y sonidos.</p>
                    <p>Trato de evitar utilizar la IA para que me genere código, ya que siendo junior y aún en proceso de aprendizaje, mis bases son fundamentales. Esas bases definen mi camino como desarrollador. Si permito que la IA haga todo el trabajo, no tendré conocimiento, ni enfrentaré los desafíos y retos que me ayudan a aprender.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-ghost shadow-lg">
                <input type="radio" name="my-accordion-3" id="aprendizaje" />
                <label htmlFor="aprendizaje" className="collapse-title text-xl font-medium">¿Cómo equilibras el aprendizaje continuo con tus proyectos actuales?</label>
                <div className="collapse-content space-y-2">
                    <p>Es un desafío constante, pero trato de establecer un horario dedicado al estudio y la práctica.</p>
                    <p>Una de las cosas que siempre hablo con gente del ámbito es el hecho de hacer proyectos grandes. Ahí es donde más estrés uno pasa, donde más problemas tiene, pero también es donde uno más aprende.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-ghost shadow-lg">
                <input type="radio" name="my-accordion-3" id="sociedad" />
                <label htmlFor="sociedad" className="collapse-title text-xl font-medium">¿Opinión de la sociedad actual?</label>
                <div className="collapse-content space-y-2">
                    <p>Siento que los valores como la honestidad, el respeto y la puntualidad han perdido fuerza en la sociedad actual.</p>
                    <p>Sin embargo, creo que, como individuos, podemos seguir defendiendo y practicando estos valores en nuestra vida diaria, a través de hábitos y un movimiento constante que nos evite caer en la rutina.</p>
                </div>
            </div>
        </section>
    );
}
