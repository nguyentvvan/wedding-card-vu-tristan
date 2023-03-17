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
			<p className='mt-2'><strong>Gửi lời chúc đến đôi uyên ương</strong></p>
		</div>
	)
}
