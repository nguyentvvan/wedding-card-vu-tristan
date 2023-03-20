import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';

const data = {
	offerImage: 'offer.png',
	bankAccount: 'bank-account.png',
	giftsImage: 'gifts.webp',
};

export default function AccountInfo() {
	return (
		<div className={clsx("row py-5", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center my-4">
				<img className="w-100" src={getImageURL(data.giftsImage)} alt='good bless' />
			</div>
			<h3 className={clsx("text-center", utilStyles.sectionText)}>
				Gửi lời chúc đến đôi uyên ương
			</h3>
			<img id="bank-account" src={getImageURL(data.bankAccount)} alt='good bless' />
			<h2 className={clsx("text-center", utilStyles.thankYouText)}>
				Thank you!
			</h2>
			<p className="text-center">Mong bạn sẽ đến chúc phúc cho chúng mình trong buổi lễ thành hôn sắp tới!</p>
		</div>
	)
}
