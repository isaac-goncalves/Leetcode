
// Finds decimal value of a given 
// romal numeral
function letterCombinations(digits: any): string[] {

    function getLetters(number: string): any {
        let letters: string[] = []
        switch (number) {
            case "2":
                letters = ["a", "b", "c"]
                break;
            case "3":
                letters = ["d", "e", "f"]
                break;
            case "4":
                letters = ["g", "h", "i"]
                break;
            case "5":
                letters = ["j", "k", "l"]
                break;
            case "6":
                letters = ["m", "n", "o"]
                break;
            case "7":
                letters = ["p", "q", "r", "s"]
                break;
            case "8":
                letters = ["t", "u", "v"]
                break;
            case "9":
                letters = ["w", "x", "y", "z"]
                break;
            default:
                letters = []
        }
        return letters
    }

    const arr = digits.split('')

    const result: string[] = []

    for (let i = 0; i < arr.length; i++) {

        const letersRespectivetoTheNumbers = getLetters(arr[i])

        result.push(letersRespectivetoTheNumbers)
    }

    const combos: string[] = []

    for (var j = 0; j < result.length; j++) {
        console.log(result[j])
        for(var k = 0; k < result[j].length; k++){
            console.log(result[j][k])
            for(var l = 0; l < result[j].length; l++){

                // console.log("++++++++++++")
                // console.log(result[j][k])
                // console.log("------------")
                // console.log(result[j][l])
            }
        }

        combos.push(result[j])
    }

    return combos
}
const res = letterCombinations("23")

console.log(res)
