import { useCity } from "./SwedenCities/CitiesDataProvider.js"
import { CitiesList } from "./SwedenCities/CitiesList.js"

import { useLandmark } from "./SwedenLandmarks/LandmarkDataProvider.js"
import { LandmarksList } from "./SwedenLandmarks/LandmarksList.js"

import { usePeople } from "./SwedenPeople/PeopleDataProvider.js"
import { PeopleList } from "./SwedenPeople/PeopleList.js"

CitiesList()

LandmarksList()

PeopleList()
