import React from 'react'
import { Job } from '../types/job'

interface JobCardProps {
  job: Job
  onAddFilter: (tag: string) => void
}

const JobCard = ({ job, onAddFilter }: JobCardProps) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools]

  return (
    <article className={`bg-white rounded-md shadow-md p-6 mb-10 md:mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative ${
        job.featured ? 'border-l-4 border-[#5ba4a4]' : ''
      }`}
    >
   
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <img
          src={job.logo.replace('.', '')}
          alt={job.company}
          className="w-12 h-12 md:w-20 md:h-20 -mt-12 md:mt-0 object-contain"
        />

        <div className="flex flex-col gap-2">
       
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[#5ba4a4] font-bold text-base">
              {job.company}
            </span>
            {job.new && (
              <span className="bg-[#5ba4a4] text-white text-xs font-bold uppercase px-2.5 py-1 rounded-full">
                New!
              </span>
            )}
            {job.featured && (
              <span className="bg-[#2c3a3a] text-white text-xs font-bold uppercase px-2.5 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h2 className="text-[#2c3a3a] font-bold text-lg md:text-xl hover:text-[#5ba4a4] cursor-pointer transition">
            {job.position}
          </h2>

          <div className="flex items-center gap-2 text-[#7b8e8e] text-sm font-medium">
            <span>{job.postedAt}</span>
            <span>•</span>
            <span>{job.contract}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-200 md:hidden my-1" />

    
      <div className="flex flex-wrap gap-3 md:justify-end">
        {tags.map((tag, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onAddFilter(tag)}
            className="bg-[#eef6f6] text-[#5ba4a4] font-bold text-sm px-3 py-1.5 rounded hover:bg-[#5ba4a4] hover:text-white transition cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </article>
  )
}

export default JobCard
