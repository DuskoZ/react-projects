import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import Title from "./components/Title";
import Button from "./components/Button";
import data from "./data/dummy";

const App = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    return (
        <section className="section">
            <Title title="reviews" />

            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    return (
                        <article key={id}>
                            {/* Person photo */}
                            <img
                                src={image}
                                alt={name}
                                className="person-img"
                            />

                            {/* Person name */}
                            <h4 className="person-name">{name}</h4>

                            {/* Person position */}
                            <p className="person-role">{title}</p>

                            {/* Person quote */}
                            <p className="person-review">{quote}</p>

                            <FaQuoteRight className="icon" />

                            <Button icon={<FiChevronLeft />} className="prev" />
                            <Button
                                icon={<FiChevronRight />}
                                className="next"
                            />
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default App;
