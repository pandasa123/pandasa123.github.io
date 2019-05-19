const getTheme = () => {
  const hour = new Date().getHours()
  console.log(hour)
  return (hour < 6 || hour > 19)
}

export default getTheme
