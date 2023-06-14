import clsx from "clsx";

import Layout from '../components/Layout';

import utilStyles from '../styles/utils.module.scss';

import getImageURL from "../helpers/getImageURL";

export default function Events() {
	return (
		<Layout>
			<div className="pt-4 pb-3 d-sm-flex d-block m-auto justify-content-center">
				<div className={utilStyles.greatText}>Vu</div>
				<img src={getImageURL("butterfly.png")} className={utilStyles.butterflyImage} alt="line" />
				<div className={utilStyles.greatText}>Tristan</div>
			</div>
			<div className={utilStyles.purpleLine}></div>
			<div>
				<h2 className={clsx("pt-3", utilStyles.permanentMarkerText)}>Events</h2>
				<img src={getImageURL("image.png")} className={utilStyles.smallImage} alt="line" />
				<div className="pb-5 pt-3">
					<h4>9:30 Uhr, 25 August, 2023</h4>
					<h5>Standesamt, Lotharinger Kloster, Hörsterstraße 28, 48143 Münster</h5>
				</div>

				<div>
					<h4>12:00 Uhr, 25 August, 2023</h4>
					<h5>BBQ und Kuchen, Pieser's Gasthaus seit 1589, Grevener Straße 125, 48291 Telgte-Vadrup</h5>
				</div>
			</div>
    </Layout>
	);
}