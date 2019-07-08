const ThemeGenerator = () => {
	if (typeof window !== `undefined`) {
		const storedTheme = window.sessionStorage.getItem('theme')

		if (storedTheme) {
			return storedTheme
		}
	}

	const hour = new Date().getHours()
	if (hour > 18 || hour < 7) {
		return 'dark'
	}
	return 'light'
}

export default ThemeGenerator
