const TimeTheme = () => {
	const hour = new Date().getHours()
	// let hour = 20
	if (hour > 19 || hour < 7) {
		return 'dark'
	}
	return 'light'
}

export default TimeTheme
