function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(satellite => {
      let alt=satellite.avgAlt;
      delete satellite.avgAlt;
      satellite["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt( Math.pow((alt+earthRadius),3) / GM));
      return satellite;
    });
  }