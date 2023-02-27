import styles from './page.module.scss';
import Image from 'next/image';

import HomepageActions from './containers/homepage-actions/homepage-actions';

export default function Home() {
    return (
        <div className={styles.homePage}>
            <div className={styles.homePageColumn}>
                <h1 className={styles.homePageTitle}>
                    Welcome to our humble Brewery!
                </h1>
                <span
                    className={styles.homePageSubTitle}
                    data-testid="subTitle"
                >
                    Finest drinks since King Arthur. Don&apos;t believe us? Come
                    and try it!
                </span>

                <div data-testid="callToActionBlock">
                    <HomepageActions className={styles.homePageActions} />
                </div>
            </div>
            <div className={styles.homePageColumn}>
                <Image
                    data-testid="accentImage1"
                    className={styles.homePageImage}
                    src="/static/home-1.jpg"
                    alt="An image of two beer glasses on coasters on a table and oak barrels on the background."
                    width="500"
                    height="250"
                />
                <Image
                    data-testid="accentImage2"
                    className={styles.homePageImage}
                    src="/static/home-2.jpg"
                    alt="A mans hand holding a half full glass of beer with foam in the sunlight."
                    width="500"
                    height="250"
                />
            </div>
            <Image
                data-testid="watermark"
                className={styles.homePageWatermark}
                src="/static/beer-stamp.jpg"
                alt="A beer stamp with the text premium craft beer."
                height="500"
                width="500"
            />
        </div>
    );
}
