import clsx from "clsx";

import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './MessageForm.module.scss';

const data = {
	loveStoryImage: 'hearts.png',
};

export default function MessageForm() {
	return (
		<div className="mt-5">
			<div>
				<img className="w-25 d-block m-auto" src={getImageURL(data.loveStoryImage)} alt='loves' />
			</div>
			<h3 className={clsx("text-center my-3", utilStyles.sectionText)}>
				Vài lời nhắn nhủ dễ thương
			</h3>
			<div id="message-form" className={clsx("row m-0", styles.loveMessages)}>
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<form className={styles.messageSection}>
						<div className="mb-3">
							<label htmlFor="fullname" className="form-label">Họ tên của bạn</label>
							<input type="text" className="form-control" id="fullname" />
						</div>
						<div className="mb-3">
							<label htmlFor="phonenumber" className="form-label">Số điện thoại</label>
							<input type="phone" className="form-control" id="phonenumber" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="message">Lời chúc của bạn</label>
							<textarea className="form-control" placeholder="Để lại lời chúc" id="message"></textarea>
						</div>
						<button type="submit" className={styles.messageButton}>Gửi lời chúc</button>
					</form>
				</div>

				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div className={styles.messageSection}>
						<div className={styles.sentMessage}>
							<strong>Van Nguyen: </strong>When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.
						</div>
						<div className={styles.sentMessage}>
							<strong>Van Nguyen: </strong>When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.
						</div>
						<div className={styles.sentMessage}>
							<strong>Van Nguyen: </strong>When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
