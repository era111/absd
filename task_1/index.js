import { encoded, translations } from "./data.js"

console.log("Let's rock")
console.log(encoded, translations)
function Decode() {
  let uni = new Set()
  const decoded = encoded.map((el) => {
    let result = {}
    for (let [key, value] of Object.entries(el)) {
      uni.add(el.groupId)
      if (!["groupId", "service", "formatSize", "ca"].includes(key))
        result[key] = translations[value]
      else result[key] = value === null ? null : value
    }
    return result
  })
  console.log("Уникальные: ", uni)
  return decoded
}

console.log(Decode())
