const Filter = ({ title, options, selectedValues, handleFilter }) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="flex flex-col">
                {options.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            value={option}
                            onChange={handleFilter}
                            checked={selectedValues.includes(option)}
                            className="checkbox checkbox-sm"
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Filter;
