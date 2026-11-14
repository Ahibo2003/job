'use client';
import { useState } from "react";
import JobCard from "@/components/jobCard";
import Filter from "@/components/filter";
import { Job } from "@/types/job";
import jobsData from "../data/data.json"; // تأكد من مطابقة المسار لملف البيانات لديك

const Page = () => {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  const handleAddFilter = (tag: string) => {
    if (!selectedFilter.includes(tag)) {
      setSelectedFilter([...selectedFilter, tag]);
    }
  };

  const handleRemoveFilter = (tagToRemove: string) => {
    setSelectedFilter(selectedFilter.filter((tag) => tag !== tagToRemove));
  };

  const handleClearFilter = () => {
    setSelectedFilter([]);
  };

  const filteredJobs = (jobsData as Job[]).filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return selectedFilter.every((filter) => jobTags.includes(filter));
  });

  return (
    <main className="max-w-5xl mx-auto px-6 pb-16">
      <Filter
        filter={selectedFilter}
        onRemoveFilter={handleRemoveFilter}
        onClearFilter={handleClearFilter}
      />

      <div className="mt-14">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onAddFilter={handleAddFilter}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;