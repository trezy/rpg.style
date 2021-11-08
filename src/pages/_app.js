// Module imports
import { appWithTranslation } from 'next-i18next'





// Local imports
import 'scss/reset.scss'
import 'scss/app.scss'
import { ApplicationHead } from 'components/ApplicationHead'





function App({ Component, pageProps }) {

	return (
		<>
			<ApplicationHead />
			<Component {...pageProps} />
		</>
	)
}

export default appWithTranslation(App)
