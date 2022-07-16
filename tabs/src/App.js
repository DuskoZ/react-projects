import React, { useState, useEffect } from "react";
import { data } from "./data/dummy";
import { FaAngleDoubleRight } from "react-icons/fa";

function App() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = () => {
        // 1. in case we want to use API :
        // const reponse = await fetch(url)
        // const newJobs = await reponse.json()
        // setJobs(newJobs)
        // setLoading(false);

        // 2. with the dummy data:
        setJobs(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        );
    }

    const { company, dates, duties, title } = jobs[value];

    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                {/* Button container */}
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${
                                    index === value && "active-btn"
                                }`}
                            >
                                {item.company}
                            </button>
                        );
                    })}
                </div>

                {/* Job info */}
                <div className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>

                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button type="button" className="btn">
                More Info
            </button>
        </section>
    );
}

export default App;
