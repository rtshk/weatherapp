
const airQualityData = [
    {
      rank: 1,
      label: "Good",
      color: "Green",
      aqiRange: [0, 50],
      message: "Air quality is satisfactory, and air pollution poses little or no risk."
    },
    {
      rank: 2,
      label: "Moderate",
      color: "Yellow",
      aqiRange: [51, 100],
      message: "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
    },
    {
      rank: 3,
      label: "Unhealthy for Sensitive Groups",
      color: "Orange",
      aqiRange: [101, 150],
      message: "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
    },
    {
      rank: 4,
      label: "Unhealthy",
      color: "Red",
      aqiRange: [151, 200],
      message: "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
    },
    {
      rank: 5,
      label: "Very Unhealthy",
      color: "Purple",
      aqiRange: [201, 300],
      message: "Health alert: The risk of health effects is increased for everyone."
    },
    {
      rank: 6,
      label: "Hazardous",
      color: "Maroon",
      aqiRange: [301, Infinity],
      message: "Health warning of emergency conditions: everyone is more likely to be affected."
    }
  ];
  
  export default airQualityData;
  