import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './GreatestMoments.module.scss';

const images = [
	'moments-portrait-1.jpg', // portrait
	'moments-lanscape-1.jpg', // lanscape
	'moments-lanscape-2.jpg', // lanscape
	'moments-portrait-2.jpg', // portrait
	'moments-portrait-3.jpg', // portrait
	'moments-lanscape-3.jpg', // lanscape
	'moments-lanscape-4.jpg', // lanscape
	'moments-portrait-4.jpg', // portrait
];

export default function GreatestMoments() {
	return (
		<div className="mb-5">
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center mx-auto my-4">
				<img className="w-50" src={getImageURL('hearts.png')} alt='loves' />
			</div>
			<h3 className={clsx("text-center my-3", utilStyles.sectionText)}>
				Khoảnh khắc đẹp nhất
			</h3>

			<div className={styles.greatestMoments}>
				<img className={styles.a} src={getImageURL(images[0])} alt='greatest moments' />
				<img className={styles.b} src={getImageURL(images[1])} alt='greatest moments' />
				<img className={styles.c} src={getImageURL(images[2])} alt='greatest moments' />
				<img className={styles.d} src={getImageURL(images[3])} alt='greatest moments' />
				<img className={styles.e} src={getImageURL(images[4])} alt='greatest moments' />
				<img className={styles.f} src={getImageURL(images[5])} alt='greatest moments' />
				<img className={styles.g} src={getImageURL(images[6])} alt='greatest moments' />
				<img className={styles.h} src={getImageURL(images[7])} alt='greatest moments' />
			</div>
		</div>
	)
}
