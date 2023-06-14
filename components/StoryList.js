import clsx from "clsx";

import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './StoryList.module.scss';

const data = {
	loveStoryImage1: '/moments/image-1.jpeg',
	loveStoryImage2: '/moments/image-2.jpeg',
	loveStoryImage3: '/moments/image-3.jpeg',
	loveStoryImage4: '/moments/image-4.jpeg',
	storyText1: '\"Me and you are like puzzle pieces, two completely different shapes, but we fit together perfectly.\"',
	verticalLine1: 'khung2.png',
	storyText2: '\"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.\"',
	verticalLine2: 'khung1.png',
	storyText3: '\"I love being married. It\'s so great to find that one special person you want to annoy for the rest of your life.\"',
	verticalLine3: 'khung3.png',
	storyText4: '\"We wouldn\'t grow up together, but could grow old together.\"',
	verticalLine4: 'khung2.png',
};

export default function StoryList() {
	return (
		<div className={clsx("row pb-5", utilStyles.contentWrapper)}>
			<div className="">
				<h2 className={clsx("py-3", utilStyles.permanentMarkerText)}>Love quotes</h2>
				<div className="row my-5 my-sm-3">
					<div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						{/* <img className={styles.loveStoryImage} src={getImageURL(data.loveStoryImage1)} alt='love story' /> */}
						<div className={clsx(styles.loveStoryImage, styles.loveStoryImage1)}></div>
					</div>
					<div className="col-xs-0 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine1)} alt='love story' />
					</div>
					<div className={clsx(styles.storyText, "col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center")}>
						<div><i>{data.storyText1}</i></div>
					</div>
				</div>
				<div className="row my-5 my-sm-3">
					<div className={clsx(styles.storyText, "revealLeft order-3 order-sm-1 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center")}>
						<div><i>{data.storyText2}</i></div>
					</div>
					<div className="revealDown col-xs-0 order-2 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine2)} alt='love story' />
					</div>
					<div className="revealRight order-1 order-sm-2 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						{/* <img className={styles.loveStoryImage} src={getImageURL(data.loveStoryImage2)} alt='love story' /> */}
						<div className={clsx(styles.loveStoryImage, styles.loveStoryImage2)}></div>
					</div>
				</div>
				<div className="row my-5 my-sm-3">
					<div className="revealLeft col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						{/* <img className={styles.loveStoryImage} src={getImageURL(data.loveStoryImage3)} alt='love story' /> */}
						<div className={clsx(styles.loveStoryImage, styles.loveStoryImage3)}></div>
					</div>
					<div className="revealDown col-xs-0 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine3)} alt='love story' />
					</div>
					<div className={clsx(styles.storyText, "revealRight col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center")}>
						<div><i>{data.storyText3}</i></div>
					</div>
				</div>
				<div className="row my-5 my-sm-3">
					<div className={clsx(styles.storyText, "revealLeft order-3 order-sm-1 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center")}>
						<div><i>{data.storyText4}</i></div>
					</div>
					<div className="revealDown col-xs-0 order-2 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine4)} alt='love story' />
					</div>
					<div className="revealRight order-1 order-sm-2 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						{/* <img className={styles.loveStoryImage} src={getImageURL(data.loveStoryImage4)} alt='love story' /> */}
						<div className={clsx(styles.loveStoryImage, styles.loveStoryImage4)}></div>
					</div>
				</div>
			</div>
		</div>
	)
}
