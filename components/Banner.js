import clsx from 'clsx';

import SnowFall from './SnowFall';
import getImageURL from '../helpers/getImageURL';

import utilStyles from '../styles/utils.module.scss';
import styles from './Banner.module.scss';

const data = {
	// bannerImage: 'quyen-tran-banner.jpg',
	// bannerImage: 'banner.jpeg',
	bannerImage: 'banner.jpg',
	dateTime: 'Vào hồi, 18:00 – thứ 5 ngày 06 tháng 04 năm 2023',
	ring: 'ring.png',
	bride: 'BẢO TRÂN',
	groom: 'VĂN QUYỀN',
};

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.bannerImage}>
				<img
					src={getImageURL(data.bannerImage)}
					alt=''
				/>
			</div>
			<div className={clsx('h-100 col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-start align-items-center pt-5', styles.bannerInfo)}>
				{/* <h5 className={'date-time text-center text-md-start'}>
					{data.dateTime}
				</h5>

				<h4 className={clsx("fs-1 d-block d-md-none pt-2", utilStyles.sectionText)}>
					{data.bride}
					<img className={styles.ringImage} src={getImageURL(data.ring)} alt="ring" />
					{data.groom}
				</h4>
				
				<div className="d-none d-md-flex flex-column w-75">
					<div className={clsx("fs-1 align-self-start", utilStyles.sectionText)}>
						{data.bride}
					</div>
					<img className={clsx("align-self-center", styles.ringImage)} src={getImageURL(data.ring)} alt="ring" />
					<div className={clsx("fs-1 align-self-end", utilStyles.sectionText)}>
						{data.groom}
					</div>
				</div> */}
			</div>
			<SnowFall />
		</div>
	)
}
