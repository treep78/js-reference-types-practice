'use strict';

// Code here.

const mBTA = {'Red': {'South Station': 1, 'Park Street': 0, 'Kendall': 1, 'Central': 2, 'Harvard': 3, 'Porter': 4, 'Davis': 5, 'Alewife': 6}, 'Green':  {'Government Center': 1, 'Park Street': 0, 'Boylston': 1, 'Arlington': 2, 'Copley': 3, 'Hynes': 4, 'Kenmore': 5}, 'Orange': {'North Station': 2, 'Haymarket': 1, 'Park Street': 0, 'State': 1, 'Downtown Crossing': 2, 'Chinatown': 3, 'Back Bay': 4, 'Forest Hills': 5}};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) =>
{
  return (mBTA[startLine][startStation]+mBTA[endLine][endStation]);
};

//console.log(stopsBetweenStations('orangeLine', 'Back Bay', 'redLine', 'Kendall'));

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
