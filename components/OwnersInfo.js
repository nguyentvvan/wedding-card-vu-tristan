import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './OwnersInfo.module.scss';

const data = {
	namesImage: 'names.png',
	groomImage: 'groom.png',
	brideImage: 'bride.png',
};

export default function OwnersInfo() {
	return (
		<div className={clsx("row", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">
				<img className={styles.namesImage} src={getImageURL(data.namesImage)} alt='bride and groom' />
			</div>

			<div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<img className="w-100" src={getImageURL(data.groomImage)} alt='groom' />
					<div className="px-4">
						<small>CHÚ RỂ</small>
						<div className={styles.ownerSharing}>
							<h6 className="fw-bold">PHẠM TUẤN NGỌC</h6>
							<small>”Tôi hạnh phúc khi ở bên cô ấy.” Thật sự mà nói chúng tôi đã trải qua nhiều biến cố trong chuyện tình cảm. Quyết định đến với nhau là kết quả cả cả hai chúng tôi đã phấn đấu vì nhau , thay đổi và bổ trợ cho nhau. Và … Chúng tôi đã về chung 1 nhà. ♥ ♥</small>
						</div>
						<div className="owner-family">
							<h6 className="fw-bold">NHÀ TRAI</h6>
							<div><strong>Bố:</strong> Phạm Duy Hưởng</div>
							<div><strong>Mẹ:</strong> Trịnh Thị Hồng</div>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<img className="w-100" src={getImageURL(data.brideImage)} alt='bride' />
					<div className="px-4">
						<small>CÔ DÂU</small>
						<div className={styles.ownerSharing}>
							<h6 className="fw-bold">LÊ MINH TRANG</h6>
							<small>“Không ngờ được” đó là câu nói tôi hay nói từ khi chúng tôi bắt đầu yêu và giờ thì… chúng tôi kết hôn rồi. Trải qua nhiều biến cố trong chuyện tình cảm chúng tôi khá dè dặt khi lại 1 lần nữa bước chân vào hôn nhân. Và rồi… “Chốt thôi”♥ ♥</small>
						</div>
						<div className="owner-family">
							<h6 className="fw-bold">NHÀ GÁI</h6>
							<div><strong>Bố:</strong> Lê Hùng Kha</div>
							<div><strong>Mẹ:</strong> Trịnh Thị Hồng</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
	)
}
