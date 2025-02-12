const StatsSection = () => {
    return (
      <section className="min-h-[50vh] flex flex-col items-center text-center my-10 sm:my-16 lg:my-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mis Estadísticas</h2>
        <p className="text-lg sm:text-xl text-neutral-400 mb-8">
            Proyectos y experiencia en desarrollo web
        </p>

        <div className="stats stats-vertical lg:stats-horizontal shadow w-fit">
            <div className="stat">
                <div className="stat-title">Proyectos</div>
                <div className="stat-value">4</div>
                <div className="stat-desc">Entre personales y clientes</div>
            </div>
    
            <div className="stat">
                <div className="stat-title">Clientes</div>
                <div className="stat-value">2</div>
                <div className="stat-desc">Freelance y colaboraciones</div>
            </div>
    
            <div className="stat">
                <div className="stat-title">Años de experiencia</div>
                <div className="stat-value">1</div>
                <div className="stat-desc">Desde 2025</div>
            </div>
        </div>
      </section>
    )
}

export default StatsSection;