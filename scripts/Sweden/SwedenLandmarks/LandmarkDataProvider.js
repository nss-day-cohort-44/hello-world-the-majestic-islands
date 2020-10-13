const landmarksData = [
    {place: "Stockholm Old Town"}, 
    {place: "Kalmar Castle"},
    {place: "Vasa Museum"},
    {place: "Skansena"},
    {place: "The Drottingholm Palace"}
]

export const useLandmark = () => {
    return landmarksData.slice()
}

