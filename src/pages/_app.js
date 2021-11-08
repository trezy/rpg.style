// Local imports
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo as DefaultSEO } from 'next-seo'





// Local imports
import 'scss/reset.scss'
import 'scss/app.scss'
import { SEOConfig } from '../../seo.config'





function App({ Component, pageProps }) {
	return (
		<>
			<meta name="viewport" content="initial-scale=1.0, viewport-fit=cover, width=device-width" />
			<link
				href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
				rel="stylesheet" />
			<DefaultSEO {...SEOConfig} />
			<Component {...pageProps} />
		</>
	)
}

export default appWithTranslation(App)
