function getExtremeWeatherIdeals(temperature, weather_id) {
    let extreme_weather = ["None", "None"]; //First has actual extreme_weather, second has info on how to deal with it

    if (temperature > 35) {
        extreme_weather[0] = "Heatwave";
        extreme_weather[1] = "Stay hydrated by drinking plenty of water and avoiding sugary or caffeinated beverages which can dehydrate you further. Keep cool by staying indoors in air-conditioned spaces if possible, or use fans and cool cloths to lower your body temperature. Wear lightweight, loose-fitting clothing, and avoid strenuous outdoor activities during the hottest parts of the day to prevent heat-related illnesses."
    }
    if (temperature < -10) {
        extreme_weather[0] = "Extreme Cold"
        extreme_weather[1] = "Keep warm by dressing in layers and covering exposed skin, focusing on insulating materials like wool or thermal fabrics. Consider renting or purchasing cold-weather gear like jackets and gloves if you're unprepared for the drop in temperature. Stay indoors when possible, and if you must go outside, wear appropriate winter gear such as hats, gloves, and scarves to protect against frostbite and hypothermia."
    }
    if (weather_id >= 210 && weather_id <= 232) {
        extreme_weather[0] = "Thunderstorm"
        extreme_weather[1] = "Take shelter indoors or in a sturdy building as soon as you hear thunder or see lightning, and avoid seeking refuge under trees or near tall objects which can attract lightning strikes. Stay informed about weather updates through radio, television, or weather apps on your phone to monitor the storm's progression and any potential warnings issued by authorities. Wait at least 30 minutes after the last rumble of thunder before resuming outdoor activities."
    }
    if (weather_id == 622 || weather_id == 602) {
        extreme_weather[0] = "Snowstorm"
        extreme_weather[1] = "Monitor weather forecasts and advisories before traveling to areas prone to snowstorms, and consider rescheduling your trip if severe weather is predicted. If caught in a snowstorm while exploring, seek shelter in designated safe spaces such as visitor centers, hotels, or restaurants until conditions improve. If you must go outside, dress warmly in layers and wear waterproof boots to protect against cold and wet conditions."
    }
    if (weather_id == 781) {
        extreme_weather[0] = "Tornado"
        extreme_weather[1] = "Keep a weather radio or smartphone app handy to receive real-time updates on tornado watches and warnings, and be prepared to take immediate action to find shelter if necessary, even while exploring tourist attractions. If you're in an unfamiliar area during a tornado warning, seek guidance from local residents, tourism staff, or emergency services on the safest course of action and the nearest shelter locations. "
    }
    if (weather_id == 711) {
        extreme_weather[0] = "Smoke"
        extreme_weather[1] = "If you must go outside, wear N95 masks or respirators to reduce inhalation of smoke particles, and avoid strenuous outdoor activities that could increase your exposure to harmful pollutants. Stay informed about air quality alerts and advisories issued by local authorities, and follow their guidance on precautions to take during smoky conditions, such as avoiding areas with heavy smoke or reducing outdoor activities altogether."
    }
    if (weather_id == 731) {
        extreme_weather[0] = "Dust"
        extreme_weather[1] = "Stay indoors or seek shelter in enclosed spaces during dusty weather to minimize exposure. Wear sunglasses and cover your nose and mouth with a scarf or mask to protect against inhaling dust particles while exploring outdoor attractions. Monitor local weather advisories and consider adjusting your itinerary to indoor activities or locations with cleaner air during periods of dusty weather."
    }
    if (weather_id == 762) {
        extreme_weather[0] = "Ash"
        extreme_weather[1] = "During ashfall, remain indoors as much as possible to avoid exposure to harmful particles, and keep windows and doors closed to prevent ash from entering buildings. Stay informed about evacuation routes and emergency procedures provided by local authorities in case ashfall escalates or poses a threat to tourist areas."
    }

    return extreme_weather
}
export {getExtremeWeatherIdeals};