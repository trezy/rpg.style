const siteDescription = ''
const siteTitle = 'RPG Style'

export const SEOConfig = {
	description: siteDescription,
	titleTemplate: `%s | ${siteTitle}`,
	openGraph: {
		description: siteDescription,
		images: [],
		title: siteTitle,
		type: 'website',
		url: 'https://example.com',
	},
	twitter: {
		cardType: 'summary_large_image',
		handle: '@TrezyCodes',
		site: '@RPGStyleApp',
	},
}
