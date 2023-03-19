import Layout from '../components/Layout';
import Banner from '../components/Banner';
import WeedingInfo from '../components/WeedingInfo';
import OwnersInfo from '../components/OwnersInfo';
import StoryList from '../components/StoryList';
import GreatestMoments from '../components/GreatestMoments';
import Events from '../components/Events';
import Address from '../components/Address';
import AccountInfo from '../components/AccountInfo';

import styles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <div className={styles.sectionBackground}>
        <WeedingInfo />
        <OwnersInfo />
        <StoryList />
      </div>
      <div className={styles.sectionBackground}>
        {/* <GreatestMoments /> */}
        <Address />
        <AccountInfo />
      </div>
    </Layout>
  );
}