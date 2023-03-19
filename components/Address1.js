import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './Address1.module.scss';

const data = {
	
};

export default function Address1() {
	return (
		<div className={clsx("row pt-5",styles.address, utilStyles.contentWrapper)}>
			<div className="row address-info mb-4 m-auto">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p className='text-green-700'><strong>HÔN LỄ CỦA CHÚNG MÌNH SẼ ĐƯỢC TỔ CHỨC VÀO LÚC:</strong></p>
					<p>18 GIỜ 00 – NGÀY 06 THÁNG 04 NĂM 2023</p>
					<p>Tại: Sảnh IRIS, Maison De Charme</p>
					<p>793/57/16, Trần Xuân Soạn, Phường Tân Hưng, Quận 7, TP.HCM</p>
					<p className='text-green-700 w-50 m-auto'><small><strong>Đám cưới của chúng mình chắc chắn sẽ kém vui đi rất nhiều nếu thiếu đi sự hiện diện của bạn. Cảm ơn bạn vì đã trở thành một phần quan trọng trong ngày đặc biệt của chúng mình!</strong></small></p>
				</div>
			</div>
			<div className={styles.mapouter}>
				<div className={styles.gmapCanvas}>
					<iframe title='Address' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=maison de charm quan 7&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
				</div>
			</div>
		</div>
	)
}
