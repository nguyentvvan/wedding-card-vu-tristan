import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './AccountInfo.module.scss';

const data = {
	offerImage: 'offer.png',
};

export default function AccountInfo() {
	return (
		<div className={clsx("row pt-5", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">
				<img className={styles.offerImage} src={getImageURL(data.offerImage)} alt='would you come?' />
			</div>
		</div>
	)
}
