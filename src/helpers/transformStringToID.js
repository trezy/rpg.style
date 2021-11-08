export function transformStringToID(string) {
	return string
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/[^-\w]+/g, '') // Remove all non-word characters
}
