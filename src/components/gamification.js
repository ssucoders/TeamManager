

/** This function will calculate the score of the user based on its points and their types
 * 
 * @param {object} user //
 */
export function getUserScore(user, pointTypes) {
    console.log(pointTypes)
    let score = 0;
    user.points.map(function (point) {
        let curScore = pointTypes.find(function (type) {
            return type.name === point.type
        })
        if(curScore!=undefined){
            score += curScore.point
        }
    })

    return score;
}

