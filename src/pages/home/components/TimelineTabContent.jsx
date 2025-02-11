const TimelineTabContent = ({ timelineData }) => {
    return (
      <div className="tab-content mt-2 p-6 bg-[#18181b]/30 backdrop-blur-md shadow-sm border border-gray-700/50">
        <div className="relative border-l border-gray-300 dark:border-gray-600 ml-6">
          {timelineData.map((event, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Icono en la línea */}
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white dark:ring-gray-900">
                {event.icon}
              </span>
              {/* Fecha */}
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                {event.date}
              </time>
              {/* Título */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>
              {/* Contenido */}
              <div className="text-base font-normal text-gray-600 dark:text-gray-300">
                {event.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TimelineTabContent;
  