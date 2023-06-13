
import getImageURL from "../helpers/getImageURL";

import styles from './HanWeddingCard.module.scss';

export default function HanWeddingCard() {
	return (
		<>
			<h2>Einladung zur hochzeit von</h2>
			<img src={getImageURL("image.png")} alt="line" />
			<h2>Vu</h2>
			<h3>und</h3>
			<h2>Tristan</h2>
			<img src={getImageURL("image.png")} alt="line" />
			<h3>25 August, 2023</h3>
		</>
	)
}