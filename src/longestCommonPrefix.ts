
// Finds decimal value of a given 
// romal numeral
function longestCommonPrefix(strs: any): string {

for(
  let i = 0;
  i < strs[0].length;
  i++
) {
  for(let j = 0; j < strs.length; j++) {
    if(strs[0][i] !== strs[j][i]) {
      return strs[0].slice(0, i)
    }
  }
}

return strs[0]

}

const res= longestCommonPrefix(["flower", "flow", "flight"])

console.log(res)
