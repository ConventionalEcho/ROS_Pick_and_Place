# Pick and place robot
<p align="center" >
  <img src="https://github.com/ConventionalEcho/ROS_Pick_and_Place/blob/master/illustration.gif" width="426" height="320">
</p>

<p align="center">
  <img src="https://github.com/ROBOTIS-GIT/emanual/blob/master/assets/images/platform/openmanipulator_x/OpenManipulator.png" width="30%" height="30%">
</p>

## Description
<p>
  Using the code in this repository and the open source robot arm OpenManipulator a pick and place robot was designed. A laptop running Ubuntu 16.04, with the ROS kinetic framework installed, was used. Using moveit in rviz a simulation was created, collision avoidance was created by editing the .urdf file in open_manipulator_description. This .urdf file was also used to determine the position of the camera. With the position of the camera the coordinates of the blocks in the camera frame were transformed using tf2_ros to the frame of the robot (/world). To detect the blocks an logitech g920 camera was used. Using artrack_alvar the blocks equipped with the     ar_tag_id: 0,1,2 were detected. 
</p>

## In advance of running the whole system the following things were done:
<ul>
  <li>Ubuntu 16.04 and ROS kinetic were installed</li>
  <li>This repository was installed in ~/catkin_ws and build using "catkin_make"</li>
  <li>The camera was calibrated using the camera calibration program of ROS (using a chess board)</li>
  <li>The autofocus of the camera was turned off</li>
</ul> 

```
//to calibrate the camera with a chess board with squares of 0.03m and 5x7 blocks
rosrun camera_calibration cameracalibrator.py --size 5x7 --square 0.030166 image:=/usb_cam/image_raw camera:=/usb_cam --no-service-check  
// to turn off the camera's autofocus, this way there is no more need to calibrate everytime (untill shutdown)
uvcdynctrl --device=/dev/video0 --set='Focus, Auto' 0
```

## To run the whole system the following commands were used:
```
//to start the core of the whole system
roscore    
// to run the publisher for the camera images
rosrun usb_cam usb_cam_node
// to publish a static transform of coordiantes from the camera frame to the world frame
rosrun tf2_ros static_transform_publisher 0 0 0 0 0 0 1 /world /head_camera
// to publish the coordinates of the ar tags (using the published frames of the usb_cam node)
roslaunch ar_tag_toolbox ar_track_usb_cam.launch
// to control the dynamixels and/or simulate the system
roslaunch open_manipulator_controller open_manipulator_controller.launch use_moveit=true
// to start the pick and place program
roslaunch open_manipulator_pick_and_place open_manipulator_pick_and_place.launch
```
## Problems that you might encounter and the solutions for those problems
### Problem 1:
<p>
  Error when starting open_manipulator_controller, Dynamixels not working. <br>
  Something like: [ERROR] [DynamixelDriver] Failed to open the port! <br>
</p>

### Solutions for problem 1:
<p>
  <ul>
    <li>Turn the power source to the opencr board on.</li>
    <li>Make sure the neccesary program is installed on the opencr board.</li>
    <li>Make sure all of the dynamixels are correctly configured (using R+ Manager 2.0), check for baud rate, id, etc </li>
    <li>Make sure you are using the right serial port, check the name opencr boards usb name (something like ttyACM0) in the /dev directory. You can do this by typing ls in the /dev directory with the board plugged in and plugged out and watch difference in devices. If you are not using the correct usb port change open_manipulator_controller.launch</li> 
    <li>Make sure you have the correct permissions over this serial usb port (use ls -al), change your permissions with: sudo chmod 777 ttyACM0. Ofcourse change ttyACM0 with the name of your usb port. </li>
    <ul>
</p>
