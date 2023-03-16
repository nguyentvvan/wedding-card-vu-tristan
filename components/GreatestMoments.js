import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './GreatestMoments.module.scss';

const data = {
	greatestMomentsImage: 'greatest-moments.png',
};

export default function GreatestMoments() {
	return (
		<div className={clsx("row pt-5", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">
				<img className={styles.greatestMomentsImage} src={getImageURL(data.greatestMomentsImage)} alt='bride and groom' />
			</div>
		</div>
	)
}
