##########################################  
PC

$ sudo apt-get install ros-melodic-joy ros-melodic-teleop-twist-joy ros-melodic-teleop-twist-keyboard ros-melodic-laser-proc ros-melodic-rgbd-launch ros-melodic-depthimage-to-laserscan ros-melodic-rosserial-arduino ros-melodic-rosserial-python ros-melodic-rosserial-server ros-melodic-rosserial-client ros-melodic-rosserial-msgs ros-melodic-amcl ros-melodic-map-server ros-melodic-move-base ros-melodic-urdf ros-melodic-xacro ros-melodic-compressed-image-transport ros-melodic-rqt-image-view ros-melodic-gmapping ros-melodic-navigation ros-melodic-interactive-markers     

$ cd ~/catkin_ws/src/   

$ git clone https://github.com/ROBOTIS-GIT/turtlebot3_msgs.git  

$ git clone -b melodic-devel https://github.com/ROBOTIS-GIT/turtlebot3.git  

$ cd ~/catkin_ws && catkin_make
#########################################   
SBC     
$ cd ~/catkin_ws/src    

$ git clone https://github.com/ROBOTIS-GIT/hls_lfcd_lds_driver.git  

$ git clone https://github.com/ROBOTIS-GIT/turtlebot3_msgs.git  

$ git clone https://github.com/ROBOTIS-GIT/turtlebot3.git 

$ cd ~/catkin_ws/src/turtlebot3     

$ sudo rm -r turtlebot3_description/ turtlebot3_teleop/ turtlebot3_navigation/ turtlebot3_slam/ turtlebot3_example/     

$ sudo apt-get install ros-melodic-rosserial-python ros-melodic-tf  

$ source /opt/ros/melodic/setup.bash    

$ cd ~/catkin_ws && catkin_make -j1

$ rosrun turtlebot3_bringup create_udev_rules
#########################################   
OpenCR 參照

https://emanual.robotis.com/docs/en/platform/turtlebot3/opencr_setup/  
#########################################   
Raspberry Pi Camera 參照    (SBC)

$ cd ~/catkin_ws/src    

$ git clone https://github.com/UbiquityRobotics/raspicam_node.git

$ cd ~/catkin_ws

$ rosdep install --from-paths src --ignore-src --rosdistro=melodic -y

dynamic-reconfigure error

    $ sudo apt-get install ros-melodic-dynamic-reconfigure*

urdf error  

    $ sudo apt-get install ros-melodic-urdf*

compressed-image-transport

    $ sudo apt-get install ros-melodic-compressed-image-transport*

#########################################

PC

$ cd ~/catkin_ws/src/

$ git clone https://github.com/ROBOTIS-GIT/turtlebot3_simulations.git

$ cd ~/catkin_ws && catkin_make

#########################################

PC 

$ cd ~/catkin_ws/src/

$ git clone https://github.com/ROBOTIS-GIT/turtlebot3_autorace_2020.git

$ cd ~/catkin_ws && catkin_make