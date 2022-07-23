import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import Title from "./components/Title";
import Button from "./components/Button";
import data from "./data/dummy";

const App = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    // Index Management
    useEffect(() => {
        const lastIndex = people.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    return (
        <section className="section">
            <Title title="reviews" />

            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    // Class management
                    let position = "next-slide";
                    if (personIndex === index) {
                        position = "active-slide";
                    }

                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = "last-slide";
                    }

                    return (
                        <article key={id} className={position}>
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
                        </article>
                    );
                })}

                {/* Prev/Next btns */}
                <Button
                    icon={<FiChevronLeft />}
                    cssClass="prev"
                    onClick={() => setIndex(index - 1)}
                />
                <Button
                    icon={<FiChevronRight />}
                    cssClass="next"
                    onClick={() => setIndex(index + 1)}
                />
            </div>
        </section>
    );
};

export default App;
