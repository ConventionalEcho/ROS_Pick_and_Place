# Pick and place robot
<p align="center" >
  <img src="https://github.com/ConventionalEcho/ROS_Pick_and_Place/blob/master/illustration.gif" width="426" height="320">
</p>

## constructed with the OpenManipulator design
<img src="https://github.com/ROBOTIS-GIT/emanual/blob/master/assets/images/platform/openmanipulator_x/OpenManipulator.png" width="20%" height="20%">

## Description
<p>
Using the code in this repository and the open source robot arm OpenManipulator a pick and place robot was designed. A laptop running Ubuntu 16.04, with the ROS kinetic framework installed, was used. Using moveit in rviz a simulation was created, collision avoidance was created by editing the .urdf file in open_manipulator_description. This .urdf file was also used to determine the position of the camera. With the position of the camera the coordinates of the blocks in the camera frame were transformed using tf2_ros to the frame of the robot (/world). To detect the blocks an logitech g920 camera was used. Using artrack_alvar the blocks equipped with the     ar_tag_id: 0,1,2 were detected. 
</p>

## In advance of running the whole system the following things were done:
<p>
  This repository was installed in ~/catkin_ws and build using "catkin_make"
  The camera was calibrated using the camera calibration program of ros (using a chess board)
  The autofocus of the camera was turned off
</p>

## To run the whole system the following commands were used:
```cpp
//to test 1
roscore    
// to test 2
rosrun usb_cam usb_cam_node
// to test 3
rosrun tf2_ros static_transform_publisher 0 0 0 0 0 0 1 /world /head_camera
// to test 3
```roslaunch open_manipulator_controller open_manipulator_controller.launch use_moveit=true```
// to test 3
roslaunch ar_tag_toolbox ar_track_usb_cam.launch
// to test 3
roslaunch open_manipulator_pick_and_place open_manipulator_pick_and_place.launch
```

<ul>
  <li>This repository was installed in ~/catkin_ws and build using "catkin_make"</li>
  <li>The camera was calibrated using the camera calibration program of ros (using a chess board)</li>
  <li>The autofocus of the camera was turned off</li>
</ul> 
