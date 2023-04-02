import { useEffect } from 'react';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import WeedingInfo from '../components/WeedingInfo';
import OwnersInfo from '../components/OwnersInfo';
import StoryList from '../components/StoryList';
import GreatestMoments from '../components/GreatestMoments';
import Address from '../components/Address';
import AccountInfo from '../components/AccountInfo';
import Actions from '../components/Actions';
import MessageForm from '../components/MessageForm';

import utilStyles from '../styles/utils.module.scss';

// import { getAllMessages } from '../helpers/storeMessage';

// export async function getServerSideProps({context}) {
//   const messages = getAllMessages();
  
//   return {
// 		props: {
// 			messages
// 		}
//   }
// }

// export default function Home({messages}) {
export default function Home() {
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
      <Banner />
      <div className={utilStyles.sectionBackground}>
        <WeedingInfo />
        <Actions />
        <OwnersInfo />
        <StoryList />
      </div>
      <div className={utilStyles.sectionBackground}>
        <GreatestMoments />
        <Address />
        {/* <MessageForm /> */}
        <AccountInfo />
      </div>
    </Layout>
  );
}