import React from "react";

interface FilterProps {
  filter: string[];
  onRemoveFilter: (tag: string) => void;
  onClearFilter: () => void;
}

const Filter = ({ filter, onRemoveFilter, onClearFilter }: FilterProps) => {
  if (filter.length === 0) return null;

  return (
    <div className="bg-white p-5 rounded-md shadow-md flex items-center justify-between -mt-8 mb-10 relative z-10">
      <div className="flex flex-wrap gap-3">
        {filter.map((tag) => (
          <div
            key={tag}
            className="flex items-stretch rounded overflow-hidden"
          >
            <span className="bg-[#eef6f6] text-[#5ba4a4] font-bold px-3 py-1 flex items-center">
              {tag}
            </span>
            <button
              type="button"
              onClick={() => onRemoveFilter(tag)}
              aria-label={"Remove " + tag}
              className="bg-[#5ba4a4] hover:bg-[#2c3a3a] px-2.5 flex items-center justify-center cursor-pointer transition-colors"
            >
              <img src="/images/icon-remove.svg" alt="" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onClearFilter}
        className="text-[#7b8e8e] hover:text-[#5ba4a4] hover:underline font-bold cursor-pointer ml-4"
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;