import React from "react";

const Footer = () => {
    return (
        <div className="mt-12">
            <p className="dark:text-gray-200 text-gray-700 text-center m-20">
                ©{new Date().getFullYear()} All rights reserved by 23design
            </p>
        </div>
    );
};

export default Footer;
