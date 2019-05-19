const getTheme = () => {
  const hour = new Date().getHours()
  return (hour < 6 || hour > 19)
}

export default getTheme
