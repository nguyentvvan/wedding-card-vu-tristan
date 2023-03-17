import clsx from 'clsx';

import SnowFall from './SnowFall';
import getImageURL from '../helpers/getImageURL';

import styles from './Banner.module.scss';

const data = {
	// bannerImage: 'quyen-tran-banner.jpg',
	bannerImage: 'banner.jpeg',
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
			<div className={clsx('h-100 col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-start justify-content-md-center align-items-center align-items-md-start pt-2 pt-md-0', styles.bannerInfo)}>
				<h5 className={'date-time text-center text-md-start'}>
					{data.dateTime}
				</h5>
				<h4 className='owners '>
					{data.bride}
					<img className={styles.ringImage} src={getImageURL(data.ring)} alt="ring" />
					{data.groom}
				</h4>
			</div>
			<SnowFall />
		</div>
	)
}
