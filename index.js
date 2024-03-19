// Code your solution in this file!
const STREET_LENGTH_IN_FEET = 264;
const HQ_LOCATION = 42;

function distanceFromHqInBlocks(block) {
  if (block < 0) {
    return 'invalid location';
  }
  if (block < HQ_LOCATION) {
    return HQ_LOCATION - block;
  } else {
    return block - HQ_LOCATION;
  }
}

function distanceFromHqInFeet(block) {
  const distanceInBlocks = distanceFromHqInBlocks(block);
  return distanceInBlocks * STREET_LENGTH_IN_FEET;
}

function distanceTravelledInFeet(start, destination) {
  if (start < 0 || destination < 0) {
    return 'invalid location';
  }
  const distance = Math.abs(start - destination);
  return distance * STREET_LENGTH_IN_FEET;
}

function calculatesFarePrice(start, destination) {
  if (start < 0 || destination < 0) {
    return 'invalid location';
  }
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
