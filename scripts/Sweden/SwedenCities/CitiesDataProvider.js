const citiesData = [
    {city: "Stockholm"}, 
    {city: "Gothenburg"},
    {city: "Malmö"},
    {city: "Uppsala"},
    {city: "Upplands Väsby"}
]

export const useCity = () => {
    return citiesData.slice()
}

