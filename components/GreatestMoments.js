import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './GreatestMoments.module.scss';

export default function GreatestMoments() {
	return (
		<div className="mb-5">
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center mx-auto my-4">
				<img className="w-50" src={getImageURL('hearts.png')} alt='loves' />
			</div>
			<h3 className={clsx("text-center my-3", utilStyles.sectionText)}>
				Khoảnh khắc đẹp nhất
			</h3>
		</div>
	)
}
