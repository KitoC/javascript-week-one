const weather = '{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}'


// You can dynamically add functions to existing inbuilt methods (you can also redefine existing functions)
Math.fToC = function(f){
    return ((parseFloat(f) - 32) * 5/9).toFixed(3)
}

// Adding the fToC function to the sting class.
String.prototype.fToC = function(){
  return ((parseFloat(this) - 32) * 5/9).toFixed(3)
}

class Weather{
  constructor(data){
    this.data = JSON.parse(data)
  }

// Getter method- a simplification/convenience
  get sunrise(){
// Check authorisation (another reason a getter is useful)
     let sunrise = this.data.query.results.channel.astronomy.sunrise
     let parts = sunrise.split(/[: ]/)
     let mins =  (parts[1]+'0').substring(0,2)
     return sunrise = `${parts[0]}:${mins}${parts[2]}`
  }
// Getter method
  get sunset(){
    let sunset = '12:00pm'
    let parts = sunset.split(/[: ]/)
    let mins =  (parts[1]+'0').substring(0,2)
    return sunset = `${parts[0]}:${mins}${parts[2]}`
  }

  get forecast(){
    return this.data.query.results.channel.item.forecast
  }

  showForecast(){
    // date:"28 Mar2018" day:"Wed" high:"83" low:"57" text:"Sunny"

    document.write('<table border=1 style="border: 2px solid red; padding: 1em; ">')
    for(const forecast of this.forecast){
      document.write('<tr>')
      document.write(`
        <td>${forecast.date}</td>
        <td>${forecast.day}</td>
        <td>${(forecast.high).fToC()}</td>
        <td>${(forecast.low).fToC()}</td>
        <td>${forecast.text}</td>`)
      document.write('</tr>')
    }
    document.write('</table>')
  }
  toCelcius(f){
    return ((parseFloat(f) - 32) * 5/9).toFixed(3)
  }

// end of class
}

j = new Weather(weather)
console.log(`sunrise: ${j.sunrise}`)
console.log(`sunset: ${j.sunset}`)
j.showForecast()
