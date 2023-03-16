import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './StoryList.module.scss';

const data = {
	loveStoryImage: 'love-story.png',
};

export default function StoryList() {
	return (
		<div className={clsx("row pt-5", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">
				<img className={styles.loveStoryImage} src={getImageURL(data.loveStoryImage)} alt='love story' />
			</div>
		</div>
	)
}
