'use strict';

const mbta = require('../lib/mbta.js');

describe('mbta', function() {

  describe('Red Line', function() {

    it('goes from "Alewife" to "South Station"', function() {
      expect(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')).toBe(7);
    });

    it('goes from "South Station" to "Alewife"', function() {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife')).toBe(7);
    });

  });

  describe('Green Line', function() {

    it('goes from "haymarket" to "copley"', function() {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Green', 'Kenmore')).toBe(6);
    });

    it('goes from "copley" to "haymarket"', function() {
      expect(mbta.stopsBetweenStations('Green', 'Kenmore', 'Green', 'Government Center')).toBe(6);
    });

  });

  describe('Orange Line', function() {

    it('goes from "North Station" to "Forest Hills"', function() {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Orange', 'Forest Hills')).toBe(7);
    });

    it('goes from "Forest Hills" to "North Station"', function() {
      expect(mbta.stopsBetweenStations('Orange', 'Forest Hills', 'Orange', 'North Station')).toBe(7);
    });

  });

  describe('Red and Green Lines', function() {

    it('goes from "South Station" to "Kenmore"', function() {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')).toBe(6);
    });

    it('goes from "Government Center" to "Alewife"', function() {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Red', 'Alewife')).toBe(7);
    });

  });

  describe('Red and Orange Lines', function() {

    it('goes from "South Station" to "Forest Hills"', function() {
      expect(mbta.stopsBetweenStations('Red', 'South Station', 'Orange', 'Forest Hills')).toBe(6);
    });

    it('goes from "North Station" to "Alewife"', function() {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Red', 'Alewife')).toBe(8);
    });

  });

  describe('Green and Orange Lines', function() {

    it('goes from "Government Center" to "Forest Hills"', function() {
      expect(mbta.stopsBetweenStations('Green', 'Government Center', 'Orange', 'Forest Hills')).toBe(6);
    });

    it('goes from "North Station" to "Kenmore"', function() {
      expect(mbta.stopsBetweenStations('Orange', 'North Station', 'Green', 'Kenmore')).toBe(7);
    });

  });

  if (mbta.stretch) {

    describe('Green and Orange Lines', function() {

    });

  }

});
