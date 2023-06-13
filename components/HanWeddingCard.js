
import getImageURL from "../helpers/getImageURL";

// import styles from './HanWeddingCard.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function HanWeddingCard() {
	return (
		<>
			<h3 className="pt-5">Einladung zur hochzeit von</h3>
			<img src={getImageURL("image.png")} alt="line" />
			<h2 className={utilStyles.greatText}>Vu</h2>
			<h4>und</h4>
			<h2 className={utilStyles.greatText}>Tristan</h2>
			<img src={getImageURL("image.png")} alt="line" />
			<h3 className="pb-3">25 August, 2023</h3>
			<div className={utilStyles.purpleLine}></div>
		</>
	)
}