//Deklarasi
//Mengubah warna background jadi biru
const buttonBiru = document.querySelector("#buttonBiru")
//Deklarasi
//Mengubah warna menjadi random
const buttonRandom = document.createElement("button")
const textRandom = document.createTextNode("Warna Random")
const h2 = document.createElement("h2")
const hasil = document.querySelector("#hasil")

buttonBiru.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue"
})

buttonRandom.appendChild(textRandom)
buttonRandom.setAttribute("id", "warnaRandom")
buttonBiru.after(buttonRandom)

hasil.appendChild(h2)

console.log(hasil);
buttonRandom.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1)
  const g = Math.round(Math.random() * 255 + 1)
  const b = Math.round(Math.random() * 255 + 1)

  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
  h2.innerHTML = `${r},${g},${b}`
})

// Deklarasi
const merah = document.getElementById("merah")
const hijau = document.getElementById("hijau")
const biru = document.getElementById("biru")
const result = document.createElement("h2")
const tabelHasil = document.getElementById("hasil2")

tabelHasil.appendChild(result)
console.log(tabelHasil);

merah.addEventListener("input", () => {
  const red = Math.round(Math.random() * 255 + 1)
  const green = Math.round(Math.random() * 255 + 1)
  const blue = Math.round(Math.random() * 255 + 1)
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
  result.innerHTML = `${red},${green},${blue}`
})
hijau.addEventListener("input", () => {
  const red = Math.round(Math.random() * 255 + 1)
  const green = Math.round(Math.random() * 255 + 1)
  const blue = Math.round(Math.random() * 255 + 1)
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
  result.innerHTML = `${red},${green},${blue}`
})
biru.addEventListener("input", () => {
  const red = Math.round(Math.random() * 255 + 1)
  const green = Math.round(Math.random() * 255 + 1)
  const blue = Math.round(Math.random() * 255 + 1)
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
  result.innerHTML = `${red},${green},${blue}`
})