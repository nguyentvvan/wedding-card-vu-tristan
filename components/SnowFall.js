import Image from 'next/image';
import styles from './SnowFall.module.scss';

const array = new Array(100).fill(0);

export default function SnowFall() {
  return (
		<div className={styles.snowFallAnimation}>
			<ul className={styles.snowFall}>
			{array.map((item, index) =>
				<li key={index}></li>
			)}
			</ul>
		</div>
  );
}