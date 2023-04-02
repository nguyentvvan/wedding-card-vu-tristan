import styles from './Actions.module.scss';
import utilStyles from '../styles/utils.module.scss';
import clsx from 'clsx';

export default function Actions() {
	const scrollToBankAccount = () =>{
		const bankAccount = document.getElementById("bank-account");
		
		if (bankAccount) {
			window.scrollTo({
				top: bankAccount.getBoundingClientRect().bottom, 
				behavior: 'smooth'
			});
		}
  };

	const scrollToSendMessage = () => {
		const messageForm = document.getElementById("message-form");
		
		if (messageForm) {
			window.scrollTo({
				top: messageForm.getBoundingClientRect().bottom, 
				behavior: 'smooth'
			});
		}
	};

	return (
		<>
			<div className={utilStyles.verticalLine}></div>
				<div className={styles.actions}>
					<div className={clsx("", styles.actionsButtons)}>
						<button className={styles.actionButton} onClick={scrollToSendMessage}>
							<i className="fas fa-envelope"></i>&nbsp;
							Gửi lời chúc
						</button>
						<button
							className={styles.actionButton}
							onClick={scrollToSendMessage}
						>
							<i className="fas fa-heart"></i>&nbsp;
							Xác nhận tham dự
						</button>
						<button className={styles.actionButton} onClick={scrollToBankAccount}>
							<i className="fas fa-gifts"></i>&nbsp;
							Mừng cưới
						</button>
					</div>
				</div>
			<div className={utilStyles.verticalLine}></div>
		</>
	)
}
