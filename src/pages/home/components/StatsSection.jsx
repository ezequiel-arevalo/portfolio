const StatsSection = () => {
    return (
      <section className="min-h-[50vh] flex flex-col items-center text-center my-10 sm:my-16 lg:my-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mis Estadísticas</h2>
        <p className="text-lg text-neutral-500 mb-6 max-w-xl">
          Un resumen de mi experiencia y los proyectos en los que he trabajado.
        </p>

        <div className="stats stats-vertical lg:stats-horizontal shadow w-fit">
            <div className="stat">
                <div className="stat-title">Proyectos</div>
                <div className="stat-value">15</div>
                <div className="stat-desc">Entre personales y clientes</div>
            </div>
    
            <div className="stat">
                <div className="stat-title">Clientes</div>
                <div className="stat-value">6</div>
                <div className="stat-desc">Freelance y colaboraciones</div>
            </div>
    
            <div className="stat">
                <div className="stat-title">Años de experiencia</div>
                <div className="stat-value">2</div>
                <div className="stat-desc">Desde 2022</div>
            </div>
        </div>
      </section>
    )
}

export default StatsSection;