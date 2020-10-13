const cities = [

    { city: "Beijing" },
    { city: "Shanghai" },
    { city: "Xi’an" },
    { city: "Zhangjiajie" },
    { city: "Wuzhen" }

]

export const useCities = () => {
    return [...cities]
}

const testCities = useCities()

console.log(testCities)
