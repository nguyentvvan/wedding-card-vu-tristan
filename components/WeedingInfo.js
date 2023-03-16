import clsx from 'clsx';
import getImageURL from '../helpers/getImageURL';

import styles from '../styles/utils.module.scss';

const data = {
	coupleImage: 'banner.jpeg',
	weddingCardImage: 'wedding-card.png',
};

export default function WeedingInfo() {
	return (
		<div className="wedding-info">
			<div className="row p-2 p-md-4">
				<div
					className="col-xs-12 col-sm-12 col-md-5 col-lg-5 position-relative d-flex justify-content-center align-items-end"
				>
					<div className={styles.coupleImage}>
						<img className='h-100 w-100 object-fit-cover' src={getImageURL(data.coupleImage)} alt='wedding' />
					</div>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 pt-md-0 px-3 pt-4">
					<img className='w-100' src={getImageURL(data.weddingCardImage)} alt='wedding-card' />
				</div>
			</div>
		</div>
	)
}
