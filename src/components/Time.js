const Time = ({timestamp}) => {
  const date  = new Date(timestamp)
  const day   = '0' + date.getDate()
  const month = '0' + (date.getMonth() + 1)
  const year  = date.getFullYear()
  const hour  = '0' + date.getHours()
  const min   = '0' + date.getMinutes()
  const sec   = '0' + date.getSeconds()
  return `${day.substr(-2)}/${month.substr(-2)}/${year} - ${hour.substr(-2)}:${min.substr(-2)}:${sec.substr(-2)}`
}

export default Time;