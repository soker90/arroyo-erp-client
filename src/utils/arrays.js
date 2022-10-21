/**
 * Split array in groups
 * @param {Array} list --- [1,2,3,4,5]
 * @param {number} groups --- 2
 * @return {Array} -----[[1,2,3],[4,5]]
 */
export const sliceToGroups = (list, groups) => {
  const restList = list.slice(0)
  const newArray = []

  while (restList.length > 0) {
    newArray.push(
      restList.splice(
        0,
        Math.round(list.length / groups)
      )
    )
  }
  return newArray
}
