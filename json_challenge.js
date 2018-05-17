const weather = '{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}'


class Weather{
  constructor(data){
    this.stats = JSON.parse(data);
    this.any = "anything"
  }
  sun(){
    console.log(`sunrise:${this.fixTime(this.stats.query.results.channel.astronomy.sunrise)}`)
    console.log(`sunset:${this.fixTime(this.stats.query.results.channel.astronomy.sunset)}`)
  }
  forecast(){
    for(const forecast of this.stats.query.results.channel.item.forecast){
      console.log(`Day: ${forecast.day}, ${forecast.date}, high: ${this.temp(forecast.high)} low: ${this.temp(forecast.low)} `)
    }
  }

  temp(temp_convert){
    const temp_con = temp_convert
    return Math.round(temp_con * 0.5556).toFixed(2)
  }

  fixTime(fixme) {
    // fixme.toLocaleTimeString(hour, minute)

    let chronos = fixme.split('')


      if(chronos[2] === ':' && chronos[4] === ' '){
        chronos.splice(4, 0,'0')
      } else if (chronos[1] === ':' && chronos[3] === ' '){
        chronos.splice(3, 0,'0')
      }
        return chronos.join('')
  }

  fixTime_oneline


}

let w = new Weather(weather);
