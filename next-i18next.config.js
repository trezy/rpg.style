// Module imports
const fs = require('fs')
const path = require('path')





const localesPath = path.resolve(process.cwd(), 'public', 'locales')

module.exports ={
	i18n: {
		defaultLocale: 'en',
		locales: fs.readdirSync(localesPath),
	},
}
