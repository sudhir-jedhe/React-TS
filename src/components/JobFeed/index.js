import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobFeed = () => {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json');
        setJobIds(response.data);
      } catch (error) {
        console.error('Error fetching job IDs:', error);
      }
    };

    fetchJobIds();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      if (jobIds.length === 0 || !hasMore) return;

      setLoading(true);
      const batchJobIds = jobIds.slice(jobs.length, jobs.length + 5);

      try {
        const jobsPromises = batchJobIds.map(async (jobId) => {
          const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`);
          return response.data;
        });

        const newJobs = await Promise.all(jobsPromises);
        setJobs((prevJobs) => [...prevJobs, ...newJobs]);
        setHasMore(newJobs.length === 5);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }

      setLoading(false);
    };

    fetchJobs();
  }, [jobIds, jobs, hasMore]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating loading delay
  };

  return (
    <div>
      <h1>Job Feed</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{new Date(job.time * 1000).toLocaleString()}</p>
          <p>Posted by: {job.by}</p>
          <a href={job.url} target="_blank" rel="noopener noreferrer">
            View Job
          </a>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {!loading && hasMore && (
        <button onClick={handleLoadMore} disabled={loading}>
          Load More
        </button>
      )}
      {!hasMore && <p>No more jobs available.</p>}
    </div>
  );
};

export default JobFeed;
