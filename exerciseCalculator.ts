type Rating = 1 | 2 | 3

interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: Rating,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (days: number[], target: number): Result => {
    const average = days.reduce((a, b) => a + b, 0) / days.length
    const success = average >= target
    let rating: Rating
    let ratingDescription

    if (!success) {
        rating = 1
        ratingDescription = "Did not meet target"
    } else if (average === target) {
        rating = 2
        ratingDescription = "Met target"
    } else {
        rating = 3
        ratingDescription = "Exceeded target!"
    }

    return {
        target,
        average,
        success,
        rating,
        ratingDescription,
        periodLength: days.length,
        trainingDays: days.filter(d => d > 0).length,
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
