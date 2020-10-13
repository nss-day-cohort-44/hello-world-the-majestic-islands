const landmarkCollection = [
    {landmark: "Millenium Cave"},
    {landmark: "Champagne Beach"},
    {landmark: "Mount Yasur"},
    {landmark: "The Nakamals"},
    {landmark: "Million Dollar Point"}
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}