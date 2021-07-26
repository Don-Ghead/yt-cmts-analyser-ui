import {gql} from "@apollo/client";

export const VIDEO_DETAILS = gql`
    query videoDetailsQuery($id: String!) {
        videoDetails(id: $id) {
            channel {
                name
                url
            }
            subscribers
            videoViews
            channelViews
            numComments
            uploadDate
        }
    }
`;
