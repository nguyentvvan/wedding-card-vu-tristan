import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './Address.module.scss';

const data = {
	offerImage: 'offer.png',
};

export default function Address() {
	return (
		<div className={styles.address}>
			<div class="row address-info mb-4 w-50 m-auto">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p className='text-green-700'><strong>HÔN LỄ CỦA CHÚNG MÌNH SẼ ĐƯỢC TỔ CHỨC VÀO LÚC:</strong></p>
					<p>10 GIỜ 00 – NGÀY 12 THÁNG 6 NĂM 2023</p>
					<p>Tại: Quinter Central Nha Trang</p>
					<p>86/4 Trần Phú, Phường Lộc Thọ, Thành phố Nha Trang, Khánh Hòa</p>
					<p className='text-green-700'><small><strong>Đám cưới của chúng mình chắc chắn sẽ kém vui đi rất nhiều nếu thiếu đi sự hiện diện của bạn. Cảm ơn bạn vì đã trở thành một phần quan trọng trong ngày đặc biệt của chúng mình!</strong></small></p>
				</div>
			</div>
			<div className={styles.mapouter}>
				<div className={"gmapCanvas"}>
					<iframe title='Address' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=maison de charm quan 7&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
			</div>
		</div>
	)
}
