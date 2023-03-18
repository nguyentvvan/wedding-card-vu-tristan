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
	storyPlace1: 'Tà Năng - Phan Dũng',
	storyText1: '\"Me and you are like puzzle pieces, two completely different shapes, but we fit together perfectly.\"',
	storyPlace2: 'Đảo Hải Tặc - September 2020',
	storyText2: '\"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.\"',
	storyPlace3: 'Maison De Charme - April 2023',
	storyText3: '\"I love being married. It\'s so great to find that one special person you want to annoy for the rest of your life.\"',
	storyPlace4: 'Nhà của chúng ta - Then',
	storyText4: '\"They wouldn\'t grow up together, but could grow old together.\"',
};

export default function StoryList() {
	return (
		<div className={clsx("row pb-5", utilStyles.contentWrapper)}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">
				<img className={styles.loveStoryText} src={getImageURL(data.loveStoryText)} alt='love story' />
			</div>
			<div className="">
				<div className="row my-3">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage1)} alt='love story' />
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace1}</strong></div>
						<div><i>{data.storyText1}</i></div>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace2}</strong></div>
						<div><i>{data.storyText2}</i></div>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage2)} alt='love story' />
					</div>
				</div>
				<div className="row my-3">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage3)} alt='love story' />
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace3}</strong></div>
						<div><i>{data.storyText3}</i></div>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace4}</strong></div>
						<div><i>{data.storyText4}</i></div>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage4)} alt='love story' />
					</div>
				</div>
			</div>
		</div>
	)
}
