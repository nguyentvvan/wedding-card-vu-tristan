import clsx from "clsx";

import getImageURL from "../helpers/getImageURL";

import utilStyles from '../styles/utils.module.scss';
import styles from './StoryList.module.scss';

const data = {
	loveStoryImage: 'hearts.png',
	loveStoryImage1: 'love-story-1.png',
	loveStoryImage2: 'love-story-2.png',
	loveStoryImage3: 'love-story-3.png',
	loveStoryImage4: 'love-story-4.png',
	storyPlace1: 'Tà Năng - Phan Dũng',
	storyText1: '\"Me and you are like puzzle pieces, two completely different shapes, but we fit together perfectly.\"',
	verticalLine1: 'khung2.png',
	storyPlace2: 'Đảo Hải Tặc - September 2020',
	storyText2: '\"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.\"',
	verticalLine2: 'khung1.png',
	storyPlace3: 'Maison De Charme - April 2023',
	storyText3: '\"I love being married. It\'s so great to find that one special person you want to annoy for the rest of your life.\"',
	verticalLine3: 'khung3.png',
	storyPlace4: 'Nhà của chúng ta - Then',
	storyText4: '\"We wouldn\'t grow up together, but could grow old together.\"',
	verticalLine4: 'khung2.png',
};

export default function StoryList() {
	return (
		<div className={clsx("row pb-5", utilStyles.contentWrapper)}>
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center my-4">
				<img className="w-50" src={getImageURL(data.loveStoryImage)} alt='loves' />
			</div>
			<h3 className={clsx("text-center", utilStyles.sectionText)}>
				Câu Chuyện Tình Yêu
			</h3>
			<div className="">
				<div className="row my-4">
					<div className="revealLeft col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage1)} alt='love story' />
					</div>
					<div className="revealDown col-xs-0 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine1)} alt='love story' />
					</div>
					<div className="revealRight fs-6 fs-sm-4 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace1}</strong></div>
						<div><i>{data.storyText1}</i></div>
					</div>
				</div>
				<div className="row my-3">
					<div className="revealLeft order-3 order-sm-1 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace2}</strong></div>
						<div><i>{data.storyText2}</i></div>
					</div>
					<div className="revealDown col-xs-0 order-2 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine2)} alt='love story' />
					</div>
					<div className="revealRight order-1 order-sm-2 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage2)} alt='love story' />
					</div>
				</div>
				<div className="row my-3">
					<div className="revealLeft col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage3)} alt='love story' />
					</div>
					<div className="revealDown col-xs-0 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine3)} alt='love story' />
					</div>
					<div className="revealRight col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace3}</strong></div>
						<div><i>{data.storyText3}</i></div>
					</div>
				</div>
				<div className="row my-3">
					<div className="revealLeft order-3 order-sm-1 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center text-center">
						<div><strong>{data.storyPlace4}</strong></div>
						<div><i>{data.storyText4}</i></div>
					</div>
					<div className="revealDown col-xs-0 order-2 d-none d-sm-block col-sm-2 col-md-2 col-lg-2 text-center">
						<img className={styles.verticalLine} src={getImageURL(data.verticalLine4)} alt='love story' />
					</div>
					<div className="revealRight order-1 order-sm-2 col-xs-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-content-center">
						<img className={clsx("w-100 object-fit-cover", styles.loveStoryImage)} src={getImageURL(data.loveStoryImage4)} alt='love story' />
					</div>
				</div>
			</div>
		</div>
	)
}
