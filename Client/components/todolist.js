import { useState } from "react";

function todolist() {
  const jobStorage = JSON.parse(localStorage.getItem("jobs"));

  const [job, setJob] = useState();
  const [jobs, setJobs] = useState(jobStorage ?? []);

  const handleChange = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJob = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJob);
      return newJobs;
    });
    setJob("");
  };

  const handleDelete = (job) => {
    const newJobStorage = jobStorage.filter((item) => item !== job);
    const jsonJob = JSON.stringify(newJobStorage);
    localStorage.setItem("jobs", jsonJob);
    setJobs(newJobStorage);
  };
  return (
    <div className="App" style={{ paddingTop: 20 }}>
      <input onChange={(e) => setJob(e.target.value)} value={job} />
      <button onClick={handleChange}>Dang ky</button>
      <ul>
        {jobs.map((job, index) => (
          <div key={index}>
            <li>{job}</li>
            <button onClick={() => handleDelete(job)}>Xoa</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default todolist;
