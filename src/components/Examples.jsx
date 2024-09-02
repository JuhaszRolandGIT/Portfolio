import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXAMPLES } from "../../examples.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  function handleClick(e, index) {
    setSelectedTopic(e);
    setSelectedStyle(index);
    setSelectedJob(null); // Reset the job selection when selecting a new topic
  }

  function handleJobClick(job) {
    setSelectedJob(job); // Set the selected job when a job is clicked
  }

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  function renderJobs(jobs) {
    return (
      <ul>
        {jobs.map((job, index) => (
          <li key={index} onClick={() => handleJobClick(job)} className="job-item">
            <div className="job-date">{job.date}</div>
            <div className="job-name">{job.name}</div>
            <AnimatePresence>
              {selectedJob === job && (
                <motion.div
                  className="job-detail"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <p>{job.info}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }

  let content;
  if (selectedTopic) {
    content = (
      <div id="tab-content">
        <h3>{selectedTopic.title}</h3>
        <div>
          {/* Render jobs if available */}
          {selectedTopic.jobs ? (
            renderJobs(selectedTopic.jobs)
          ) : (
            <div dangerouslySetInnerHTML={{ __html: selectedTopic.description }} />
          )}
        </div>
      </div>
    );
  } else {
    content = 'Válassz egy lehetőséget ↑';
  }

  return (
    <section id="examples">
      <menu>
        <button onClick={() => handleClick(EXAMPLES[0], 0)} className={selectedStyle === 0 ? 'active' : ''}>Technológiák</button>
        <button onClick={() => handleClick(EXAMPLES[1], 1)} className={selectedStyle === 1 ? 'active' : ''}>Tapasztalat</button>
        <button onClick={() => handleClick(EXAMPLES[2], 2)} className={selectedStyle === 2 ? 'active' : ''}>Tanulmányok</button>
      </menu>
      {content}
    </section>
  );
}