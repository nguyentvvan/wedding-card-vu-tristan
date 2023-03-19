import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './OwnersInfo.module.scss';

const data = {
	namesImage: 'names.png',
	// groomImage: 'groom.png',
	groomImage: 'quyen-1.png',
	// brideImage: 'bride.png',
	brideImage: 'tran-1.png',
	ring: 'rings.png',
	bride: 'BẢO TRÂN',
	groom: 'VĂN QUYỀN',
};

export default function OwnersInfo() {
	return (
		<div className={clsx("row", utilStyles.contentWrapper)}>
			{/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center my-4">
				<img className="w-100" src={getImageURL(data.namesImage)} alt='bride and groom' />
			</div> */}
			<h4 className={clsx("fs-1 pt-4 pb-2 text-center", utilStyles.sectionText)}>
				{data.groom}
				<img className={styles.ringImage} src={getImageURL(data.ring)} alt="ring" />
				{data.bride}
			</h4>

			<div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
				<div className="revealLeft col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<img className="w-75" src={getImageURL(data.groomImage)} alt='groom' />
					<div className="px-4 py-3">
						<small>ÚT NAM</small>
						<div className={styles.ownerSharing}>
							<h6 className="fw-bold">NHÀ TRAI</h6>
							<div><strong>Mẹ: </strong>Lê Thị Hồng Hạnh</div>
							<div><strong>&nbsp;</strong>&nbsp;</div>
						</div>
					</div>
				</div>
				<div className="revealRight col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<img className="w-75" src={getImageURL(data.brideImage)} alt='bride' />
					<div className="px-4 py-3">
						<small>THỨ NỮ</small>
						<div className={styles.ownerSharing}>
							<h6 className="fw-bold">NHÀ GÁI</h6>
							<div><strong>Bố: </strong>Thiều Hoà</div>
							<div><strong>Mẹ: </strong>Phan Thị Bê</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
	)
}
