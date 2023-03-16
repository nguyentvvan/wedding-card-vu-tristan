import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './Events.module.scss';

const data = {
	eventsImage: 'events.png',
};

export default function Events() {
	return (
		<div className={clsx("row pt-5", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">
				<img className={styles.eventsImage} src={getImageURL(data.eventsImage)} alt='bride and groom' />
			</div>
		</div>
	)
}
