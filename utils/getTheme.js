const getTheme = () => {
  // let hour = new Date().getHours()
  let hour = 20
  // let hour = 3
  return (hour < 6 || hour > 19)
}

export default getTheme
