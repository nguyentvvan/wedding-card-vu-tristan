import { useEffect } from 'react';

import Layout from '../components/Layout';

import StoryList from '../components/StoryList';

export default function Loves() {
	useEffect(() => {
		function reveal() {
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      
      // reveal from Right
			const revealRightElements = document.querySelectorAll(".revealRight");

      // reveal from Left
			const revealLeftElements = document.querySelectorAll(".revealLeft");

      // reveal up
			const revealUpElements = document.querySelectorAll(".revealUp");

      // reveal down
			const revealDownElements = document.querySelectorAll(".revealDown");

      const revealElements = [
        ...revealRightElements,
        ...revealLeftElements,
        ...revealUpElements,
        ...revealDownElements,
      ];

      for (let i = 0; i < revealElements.length; i++) {
				const elementTop = revealElements[i].getBoundingClientRect().top;

				if (elementTop < windowHeight - elementVisible) {
					revealElements[i].classList.add("active");
				} else {
					// revealElements[i].classList.remove("active");
				}
			}
		}

		window.addEventListener("scroll", reveal);

		return () => window.removeEventListener("scroll", reveal);
	}, []);

	return (
		<Layout>
			<StoryList />
    </Layout>
	);
}