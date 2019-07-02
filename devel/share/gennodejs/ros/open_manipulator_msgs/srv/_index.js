
"use strict";

let SetKinematicsPose = require('./SetKinematicsPose.js')
let GetJointPosition = require('./GetJointPosition.js')
let GetKinematicsPose = require('./GetKinematicsPose.js')
let SetJointPosition = require('./SetJointPosition.js')
let SetDrawingTrajectory = require('./SetDrawingTrajectory.js')
let SetActuatorState = require('./SetActuatorState.js')

module.exports = {
  SetKinematicsPose: SetKinematicsPose,
  GetJointPosition: GetJointPosition,
  GetKinematicsPose: GetKinematicsPose,
  SetJointPosition: SetJointPosition,
  SetDrawingTrajectory: SetDrawingTrajectory,
  SetActuatorState: SetActuatorState,
};
