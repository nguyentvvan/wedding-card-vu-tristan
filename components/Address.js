import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './Address.module.scss';

const data = {
	// calendarImage: 'thursday.webp',
	calendarImage: 'thursday-1.png',
	groomBrideImage: 'groom-bride.png',
};

export default function Address() {
	return (
		<div className={clsx("row m-0", styles.address)}>
			<div className={clsx("col-xs-12 col-sm-12 col-md-6 col-lg-6")}>
				<div className={clsx("d-flex flex-column align-items-center", styles.addressSection, styles.calendar)}>
					<h4 className={clsx("text-center py-3", utilStyles.sectionText)}>Chúng mình cưới</h4>
					<p>Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc</p>
					<img className={clsx("w-75 object-fit-cover", styles.calendarImage)} src={getImageURL(data.calendarImage)} alt="calendar" />
					<h3 className={clsx("text-center", utilStyles.sectionText)}>
						<div>Thứ 5</div>
						<div>
							06/04/2023
						</div>
					</h3>
				</div>
			</div>
			<div className={clsx("col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4 mt-md-0")}>
				<div className={clsx("d-flex flex-column", styles.addressSection)}>
					<div className={clsx("d-flex", styles.schedule)}>
						<div className="d-flex align-items-center">
							<div>
								<img className={styles.scheduleImage} src={getImageURL(data.groomBrideImage)} alt="groom bride" />
							</div>
						</div>
						<div className="text-start">
							<div className="text-danger">18 GIỜ 00</div>
							<div>Sảnh IRIS, Maison De Charme</div>
							<div>793/57/16, Trần Xuân Soạn, Phường Tân Hưng, Quận 7</div>
						</div>
					</div>
					<div className={clsx("flex-grow-1", styles.mapouter)}>
						<div className={styles.gmapCanvas}>
							<iframe title='Address' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=maison de charm quan 7&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
