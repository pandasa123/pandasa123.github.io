import { ThemeType } from './ThemeType'

const ThemeGenerator = (): ThemeType => {
	if (typeof window !== `undefined`) {
		const storedTheme: string = window.sessionStorage.getItem('theme')

		if (storedTheme) {
			return storedTheme
		}
	}

	// if (window.matchMedia('(prefers-color-scheme: dark)')) {
	// 	return 'dark'
	// }
	//
	// if (window.matchMedia('(prefers-color-scheme: light)')) {
	// 	return 'light'
	// }

	const hour: number = new Date().getHours()
	if (hour > 18 || hour < 7) {
		return 'dark'
	}
	return 'light'
}

export default ThemeGenerator
