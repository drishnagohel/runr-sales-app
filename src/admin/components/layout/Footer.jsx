import React from "react";

const Footer = () => {
  return (
    <footer>
    <div class="is-flex is-gap-3 is-align-items-center is-justify-content-space-between">
        <span class="fs-8 fw-500 gray-600">© 2024 Powered by <a href="https://insomniacs.in/" target="_blank" class="primary-text">insomniacs</a></span>
        <span class="fs-8 fw-500 gray-600 is-align-items-center is-flex is-gap-2 made-in-india">
            <span>Made in</span>
            <img src="media/images/icons/flag.svg" width="36" alt="India Flag"/>
        </span>
    </div>
</footer>
  );
};

export default Footer;
