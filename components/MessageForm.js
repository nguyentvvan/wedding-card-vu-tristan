import { useRef } from 'react';
import clsx from "clsx";

import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './MessageForm.module.scss';

function MessageForm({messages}) {
	const successAlertRef = useRef(null);
	const sentMessageListRef = useRef(null);

	const submitHandler = (e) => {
		const message = {
			id: '',
			fullname: e.target.fullname.value,
			phone: e.target.phone.value,
			message: e.target.message.value,
		};
		
		fetch(
			window.location.href + "/api/message",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(message),
			}).then((response) => response.json()
			).then((data) => {
				renderNewMessage(message);
				showAlert(true);
				e.target.reset();
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		e.preventDefault();
	};

	const renderNewMessage = (message) => {
		const list = document.getElementById("sent-message-list");
		const newElement = document.createElement("div");
		newElement.classList.add(styles.sentMessage);
		newElement.innerHTML = `
			<strong><span class="text-danger">${message.fullname}</span>: </strong>
			${message.message}
		`;
		if (list) {
			list.prepend(newElement);
		}
	};

	const showAlert = (visible) => {
		if (visible) {
			successAlertRef.current.classList.remove("d-none");
			sentMessageListRef.current.classList.add("d-none");
		} else {
			successAlertRef.current.classList.add("d-none");
			sentMessageListRef.current.classList.remove("d-none");
		}
	};

	return (
		<div className="mt-5">
			<div>
				<img className="w-25 d-block m-auto" src={getImageURL('hearts.png')} alt='loves' />
			</div>
			<h3 className={clsx("text-center my-3", utilStyles.sectionText)}>
				Vài lời nhắn nhủ dễ thương
			</h3>
			<div className={clsx("row m-0", styles.loveMessages)}>
				<div id="success-alert" ref={successAlertRef} className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pb-3 d-none">
					<div className={clsx(styles.successAlert, styles.messageSection)}>
						<h5>Gửi lời chúc thành công</h5>
						<p>Lời chúc của bạn đã được gửi đến cho cô dâu chú rể.</p>
						<p>Hẹn gặp lại bạn vào ngày thứ 5, 06/04/2023 nhé.</p>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => showAlert(false)}
						>
							OK
						</button>
					</div>
				</div>

				<div id="message-form" ref={sentMessageListRef} className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pb-3">
					<form onSubmit={submitHandler} action="" className={styles.messageSection}>
						<div className="mb-3">
							<label htmlFor="fullname" className="form-label">Họ tên của bạn <span className="text-danger">*</span></label>
							<input
								type="text" 
								className="form-control" 
								placeholder="Tên của bạn"
								id="fullname" 
								name="fullname"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="phonenumber" className="form-label">Số điện thoại</label>
							<input type="phone" className="form-control" placeholder='Số điện thoại' id="phonenumber" name="phone" />
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="message">Lời chúc của bạn <span className="text-danger">*</span></label>
							<textarea
								className="form-control"
								placeholder="Để lại lời chúc"
								id="message"
								name="message"
								required
							></textarea>
						</div>
						<button
							id="button-send-message"
							type="submit"
							className={styles.messageButton}
						>
							Gửi lời chúc
						</button>
					</form>
				</div>

				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pb-3">
					<div id="sent-message-list" className={styles.messageSection}>
						{messages.map((message) => 
						<div key={message.id} className={styles.sentMessage}>
							<strong><span className="text-danger">{message.fullname}</span>: </strong>
							{message.message}
						</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MessageForm