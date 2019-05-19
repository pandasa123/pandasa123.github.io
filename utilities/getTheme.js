const getTheme = () => {
  // const hour = new Date().getHours()
  const hour = 8
  return (hour < 6 || hour > 19)
}

export default getTheme
