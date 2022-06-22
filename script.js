//sort objects by 1st letter according to an arbitrarily provided alphabet

function sortNamesByProvidedAlphabet(arr) {
  var names = []
  for (i = 0; i < arr.length; i++) {
    var name = arr[i].split('')
    names.push(
      name.map((e) => {
        return e.toLowerCase()
      })
    )
  }
  for (o = 0; o < names.length; o++) {
    for (k = 0; k < names.length; k++) {
      if (k + 1 < names.length) {
        let kn = alphabet.indexOf(names[k][0])
        let kkn = parseInt(alphabet.indexOf(names[k + 1][0]))
        if (kn > kkn) {
          let tmp = names[k]
          names[k] = names[k + 1]
          names[k + 1] = tmp
        }
      }
    }
  }
  for (z = 0; z < names.length; z++) {
    names[z][0] = names[z][0].toUpperCase()
    names[z] = names[z].toString().replaceAll(',', '')
  }
  let final = names.toString()
  result.textContent = final.replaceAll(',', ', ')
}

var alphabet
var listOfWords

const alphabetInput = document.querySelector('#alphabet')
const listOfWordsInput = document.querySelector('#listOfWords')
const result = document.querySelector('#result')
const sortButton = document.querySelector('#sort')

alphabetInput.addEventListener('focusout', (event) => {
  alphabet = event.target.value.split('')
  console.log(alphabet)
})

listOfWordsInput.addEventListener('focusout', (event) => {
  listOfWords = Array.from(event.target.value.split(', '))
  console.log(listOfWords)
})

sortButton.addEventListener('click', () => {
result.textContent = 'mew'
sortNamesByProvidedAlphabet(listOfWords)
})