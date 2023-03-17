import clsx from "clsx";
import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './StoryList.module.scss';

const data = {
	loveStoryText: 'love-story.png',
	loveStoryImage1: 'love-story-1.png',
	loveStoryImage2: 'love-story-2.png',
	loveStoryImage3: 'love-story-3.png',
	loveStoryImage4: 'love-story-4.png',
};

export default function StoryList() {
	return (
		<div className={clsx("row pb-5", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">
				<img className={styles.loveStoryText} src={getImageURL(data.loveStoryText)} alt='love story' />
			</div>
			<div className="row d-flex justify-content-center">
				
				<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage1)} alt='love story' />
				</div>
				<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage2)} alt='love story' />
				</div>
				<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage3)} alt='love story' />
				</div>
				<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage4)} alt='love story' />
				</div>
			</div>
		</div>
	)
}
