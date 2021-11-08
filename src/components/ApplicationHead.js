// Module imports
import { DefaultSeo as DefaultSEO } from 'next-seo'
import NextHead from 'next/head'





// Local imports
import { SEOConfig } from '../../seo.config'





export function ApplicationHead() {
	return (
		<>
			<NextHead>
				<meta name="viewport" content="initial-scale=1.0, viewport-fit=cover, width=device-width" />

				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
					rel="stylesheet" />
			</NextHead>

			<DefaultSEO {...SEOConfig} />
		</>
	)
}
