const testSentimentSummary = {
    clearlyPositive: 2,
    slightlyPositive: 0,
    mixed: 1,
    neutral: 1,
    slightlyNegative: 0,
    clearlyNegative: 1,
}

const testEnrichedComments = [
    {
        comment: 'This is a positive comment!',
        sentiment: 'Clearly Positive'
    },
    {
        comment: 'This is also a positive comment!',
        sentiment: 'Clearly Positive'
    },
    {
        comment: 'This is a mixed comment!',
        sentiment: 'Mixed'
    },
    {
        comment: 'This is a neutral comment!',
        sentiment: 'Neutral'
    },
    {
        comment: 'This is a negative comment!',
        sentiment: 'Clearly Negative'
    },

]

export const testTopLevelCommentsInfo = {
    enrichedComments: testEnrichedComments,
    numComments: Object.keys(testSentimentSummary).reduce( (result, current) => result += testSentimentSummary[current]),
    sentiments: testSentimentSummary
}