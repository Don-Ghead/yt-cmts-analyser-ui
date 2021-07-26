import {number, shape, string} from "prop-types";

export const videoDetails = shape({
    channel: shape({
        name: string.isRequired,
        url: string.isRequired
    }).isRequired,
    subscribers: number.isRequired,
    videoViews: number.isRequired,
    channelViews: number.isRequired,
    numComments: number.isRequired,
    uploadDate: string.isRequired
})
