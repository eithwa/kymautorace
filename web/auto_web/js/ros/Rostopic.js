var trigger = new ROSLIB.Topic({
    ros: ros,
    name: '/core/decided_mode',
    messageType: '/std_msgs/UInt8'
});
function autorace_trigger(value)
{
    let msg = new ROSLIB.Message({
        data:value
    });
    //console.log("shoot");
    trigger.publish(msg);
}
var sign = new ROSLIB.Topic({
    ros: ros,
    name: '/detect/traffic_sign',
    messageType: '/std_msgs/UInt8'
});
function autorace_sign(value)
{
    let msg = new ROSLIB.Message({
        data:value
    });
    //console.log("shoot");
    sign.publish(msg);
}
var shoot = new ROSLIB.Topic({
    ros: ros,
    name: '/motion/tb3/shoot',
    messageType: '/std_msgs/Empty'
});

function PublishTopicshoot() {
    let msg = new ROSLIB.Message({
    });
    //console.log("shoot");
    shoot.publish(msg);
}
//shoot enable
var shootstrategy = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/strategy/strategy',
    messageType: '/std_msgs/Int32'
});
function PublishTopicshootstrategy(value) {
    //console.log(checked);
    var msg = new ROSLIB.Message({
      data:value
    });
    shootstrategy.publish(msg);
}
//double point
var double_point = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/strategy/double',
    messageType: '/std_msgs/Int32'
});
function PublishTopicdouble(double_point_color) {
    var msg = new ROSLIB.Message({
      data:double_point_color
    });
    double_point.publish(msg);
}
//move detection
var moving = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/strategy/moving',
    messageType: '/std_msgs/Bool'
});
function PublishTopicmoving() {
    var msg = new ROSLIB.Message({
      data:true
    });
    moving.publish(msg);
}
var cmdVel = new ROSLIB.Topic({
    ros: ros,
    name: '/cmd_vel',
    messageType: '/geometry_msgs/Twist'
});
function PublishTopicCmdVel(vec3) {
    console.log(vec3);
    //vec3=parseFloat(vec3);
    var twist = new ROSLIB.Message({
        linear: {
            x: parseFloat(vec3.x),
            y: parseFloat(vec3.y),
            z: parseFloat(0)
        },
        angular: {
            x: parseFloat(0),
            y: parseFloat(0),
            z: parseFloat(vec3.z)
        }
    });
    cmdVel.publish(twist);
    PublishTopicmoving();
}
function shop_robot(){
    var twist = new ROSLIB.Message({
        linear: {
            x: parseFloat(0),
            y: parseFloat(0),
            z: parseFloat(0)
        },
        angular: {
            x: parseFloat(0),
            y: parseFloat(0),
            z: parseFloat(0)
        }
    });
    console.log("stop");
    cmdVel.publish(twist);
    PublishTopicmoving();
}
//===================================================================
//HSV mode
//color
var TopicColor = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/color',
    messageType: '/vision/color'
    //messageType: '/vision/hsv'
});

/*var TopicColormode = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/colormode',
    //messageType: '/vision/color'
    messageType: 'std_msgs/Int32'
});*/
function Color_Disable(mode) {
    switch(mode) {
        case 0:
            if(document.getElementById('Red_disable').checked == true){
                console.log("Red_disable");
                let box = [0, 0, 0, 0, 0, 0];
                Pub_Color(mode,box); 
            }else {
                console.log("Red_enable");
                Pub_Color(mode,RedBox);     
            }
            break;
        //====================
        case 1:
            if(document.getElementById('Blue_disable').checked == true){
                console.log("Blue_disable");
                let box = [0, 0, 0, 0, 0, 0];
                Pub_Color(mode,box); 
            }else {
                console.log("Blue_enable");
                Pub_Color(mode,BlueBox);     
            }
            break;
        //====================
        case 2:
            if(document.getElementById('Yellow_disable').checked == true){
                console.log("Yellow_disable");
                let box = [0, 0, 0, 0, 0, 0];
                Pub_Color(mode,box); 
            }else {
                console.log("Yellow_enable");
                Pub_Color(mode,YellowBox);     
            }
            break;
        //====================
        case 3:
            if(document.getElementById('White_disable').checked == true){
                console.log("White_disable");
                let box = [0, 0, 0, 0, 0, 0];
                Pub_Color(mode,box); 
            }else {
                console.log("White_enable");
                Pub_Color(mode,WhiteBox);     
            }
            break;
        //====================
        case 4:
            if(document.getElementById('Black_disable').checked == true){
                console.log("Black_disable");
                let box = [0, 0, 0, 0, 0, 0];
                Pub_Color(mode,box); 
            }else {
                console.log("Black_enable");
                Pub_Color(mode,BlackBox);     
            }
            break;
        //====================
    }
}

function Change_HSVmode() {
    var mode = parseInt(document.getElementById('HSVSelect').value);
    let camera1 = document.getElementById('Camera1').checked;
    let camera2 = document.getElementById('Camera2').checked;
    switch (mode) {
        case 0:
            if(camera1){
                for (var i = 0; i < 6; i++) {
                    document.getElementsByName('HSVElement')[i].value = RedBox[i];
                    document.getElementsByName('HSVLabelElement')[i].innerText = RedBox[i];
                }
                Pub_Color(mode,RedBox);
            }
            if(camera2){
                for (var i = 0; i < 6; i++) {
                    document.getElementsByName('HSVElement')[i].value = RedGoalBox[i];
                    document.getElementsByName('HSVLabelElement')[i].innerText = RedGoalBox[i];
                }
                Pub_Color(5,RedGoalBox);
            }
            break;
        case 1:
            if(camera1){
                for (var i = 0; i < 6; i++) {
                    document.getElementsByName('HSVElement')[i].value = BlueBox[i];
                    document.getElementsByName('HSVLabelElement')[i].innerText = BlueBox[i];
                }
                Pub_Color(mode,BlueBox);
            }
            if(camera2){
                 for (var i = 0; i < 6; i++) {
                    document.getElementsByName('HSVElement')[i].value = BlueGoalBox[i];
                    document.getElementsByName('HSVLabelElement')[i].innerText = BlueGoalBox[i];
                }
                Pub_Color(6,BlueGoalBox);
            }
            break;
        case 2:
            if(camera1){
                for (var i = 0; i < 6; i++) {
                    document.getElementsByName('HSVElement')[i].value = YellowBox[i];
                    document.getElementsByName('HSVLabelElement')[i].innerText = YellowBox[i];
                }
                Pub_Color(mode,YellowBox);
            }
            if(camera2){
                for (var i = 0; i < 6; i++) {
                    document.getElementsByName('HSVElement')[i].value = YellowGoalBox[i];
                    document.getElementsByName('HSVLabelElement')[i].innerText = YellowGoalBox[i];
                }
                Pub_Color(7,YellowGoalBox);
            }
            break;
        case 3:
            for (var i = 0; i < 6; i++) {
                document.getElementsByName('HSVElement')[i].value = WhiteBox[i];
                document.getElementsByName('HSVLabelElement')[i].innerText = WhiteBox[i];
            }
            Pub_Color(mode,WhiteBox);
            break;
        case 4:
            for (var i = 0; i < 6; i++) {
                document.getElementsByName('HSVElement')[i].value = BlackBox[i];
                document.getElementsByName('HSVLabelElement')[i].innerText = BlackBox[i];
            }
            Pub_Color(mode,BlackBox);
            break;
    }
    Open_Camera('mask');
}

function Set_HSV() {
    var mode = parseInt(document.getElementById('HSVSelect').value);
    let camera1 = document.getElementById('Camera1').checked;
    let camera2 = document.getElementById('Camera2').checked;
    switch (mode) {
        case 0:
            document.getElementById('Red_disable').checked = false;
            if(camera1){
                for (var i = 0; i < 6; i++) {
                    RedBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
                }
                if (Topic_HSV_Flag)
                    console.log('Topic RedHSV = ' + RedBox);
                Pub_Color(mode,RedBox);
            }
            if(camera2){
                for (var i = 0; i < 6; i++) {
                    RedGoalBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
                }
                if (Topic_HSV_Flag)
                    console.log('Topic RedHSV = ' + RedGoalBox);
                Pub_Color(5,RedGoalBox);
            }
            break;
        case 1:        
            document.getElementById('Blue_disable').checked = false;
            if(camera1){
                for (var i = 0; i < 6; i++) {
                    BlueBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
                }
                if (Topic_HSV_Flag)
                    console.log('Topic BlueHSV = ' + BlueBox);
                Pub_Color(mode,BlueBox);
            }
            if(camera2){
                for (var i = 0; i < 6; i++) {
                    BlueGoalBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
                }
                if (Topic_HSV_Flag)
                    console.log('Topic BlueHSV = ' + BlueGoalBox);
                Pub_Color(6,BlueGoalBox);
            }
            break;
        case 2:
            document.getElementById('Yellow_disable').checked = false;
            if(camera1){
                for (var i = 0; i < 6; i++) {
                    YellowBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
                }
                if (Topic_HSV_Flag)
                    console.log('Topic YellowHSV = ' + YellowBox);
                Pub_Color(mode,YellowBox);
            }
            if(camera2){
                for (var i = 0; i < 6; i++) {
                    YellowGoalBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
                }
                if (Topic_HSV_Flag)
                    console.log('Topic YellowHSV = ' + YellowGoalBox);
                Pub_Color(7,YellowGoalBox);
            }
            break;
        case 3:
            document.getElementById('White_disable').checked = false;
            for (var i = 0; i < 6; i++) {
                WhiteBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
            }
            if (Topic_HSV_Flag)
                console.log('Topic WhiteHSV = ' + WhiteBox);
            Pub_Color(mode,WhiteBox);
            break;
        case 4:
            document.getElementById('Black_disable').checked = false;
            for (var i = 0; i < 6; i++) {
                BlackBox[i] = parseInt(document.getElementsByName('HSVElement')[i].value);
            }
            if (Topic_HSV_Flag)
                console.log('Topic BlackHSV = ' + BlackBox);
            Pub_Color(mode,BlackBox);
            break;
    }
    
}

function Pub_Color(mode,box) {
    /*
     var Color = new ROSLIB.Message({
        ColorMode: mode,
        RedHSVBox: RedBox,
        BlueHSVBox: BlueBox,
        YellowHSVBox: YellowBox,
        WhiteHSVBox: WhiteBox,
        BlackHSVBox: BlackBox,
    });
*/
  for (var i = 0; i < 6; i++) {
                console.log(box[i]);
            }
    let Color = new ROSLIB.Message({
       mode: mode,
       data: box
    });
    TopicColor.publish(Color);
}
//===================================================================
var TopicCenter = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/center',
    messageType: 'std_msgs/Int32MultiArray'
});
var TopicCenter2 = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/center2',
    messageType: 'std_msgs/Int32MultiArray'
});
function Set_center() { 
    let param = document.getElementsByName('VisionParamElement');
    for (let i = 0; i < param.length; i++) {
        center[i] = parseInt(document.getElementsByName('VisionParamElement')[i].value);
    }
    let msg = new ROSLIB.Message({
       data: center
    });

    console.log('Topic Center = ' + center);
    let camera1 = document.getElementById('Camera1').checked;
    let camera2 = document.getElementById('Camera2').checked;
    if(camera1==true){
        TopicCenter.publish(msg);
    }
    if(camera2==true){
        TopicCenter2.publish(msg);
    }
}

//===================================================================
var TopicSave = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/save',
    messageType: 'std_msgs/Int32'
});

function Pub_Save() {
    var save = new ROSLIB.Message({
        data: 1
    });
    TopicSave.publish(save);
}

//===================================================================
var TopicVideoMode = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/VideoMode',
    messageType: 'std_msgs/Int32'
});

function Pub_VideoMode(num) {
    var videomode = new ROSLIB.Message({
        data: num
    });
    TopicVideoMode.publish(videomode);
}
//===================================================================
var fps = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/fps',
    messageType: 'std_msgs/Float32'
});
fps.subscribe(function(msg) {
    var framerate;
    let camera1 = document.getElementById('Camera1').checked;
    let camera2 = document.getElementById('Camera2').checked;
    if(camera1){
        framerate = Math.round(msg.data);
        document.getElementsByName('FpsElement')[0].innerText = framerate;
    }
});
//===================================================================
var fps2 = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/fps2',
    messageType: 'std_msgs/Float32'
});
fps2.subscribe(function(msg) {
    var framerate;
    let camera1 = document.getElementById('Camera1').checked;
    let camera2 = document.getElementById('Camera2').checked;
    if(camera2){
        framerate = Math.round(msg.data);
        document.getElementsByName('FpsElement')[0].innerText = framerate;
    }
});
//=========================
var Monitor = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/object',
    messageType: 'std_msgs/Int32MultiArray'
});
Monitor.subscribe(function(msg) {
    var MBox = [];

    MBox=msg.data;
    let camera1 = document.getElementById('Camera1').checked;
    let camera2 = document.getElementById('Camera2').checked;
    if(camera1){
        for (let i = 0; i < 12; i++) {
            document.getElementsByName('MonitorElement')[i].innerText = MBox[i];
        }
    }
});
//=========================
var Monitor2 = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/object2',
    messageType: 'std_msgs/Int32MultiArray'
});
Monitor2.subscribe(function(msg) {
    var MBox = [];

    MBox=msg.data;
    let camera1 = document.getElementById('Camera1').checked;
    let camera2 = document.getElementById('Camera2').checked;
    if(camera2){
        for (let i = 0; i < 12; i++) {
            document.getElementsByName('MonitorElement')[i].innerText = MBox[i];
        }
    }
});
//===========================
var catchball = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/catch',
    messageType: 'std_msgs/Int32MultiArray'
});
catchball.subscribe(function(msg) {
    let Box = [];
    let Catch = 'False';
    let Color = 'None';
    Box=msg.data;
    if(Box[0]==1){
        Catch = 'True';
        if(Box[1]==0){
            Color = 'Red';
        }
        if(Box[1]==1){
            Color = 'Blue';
        }
        if(Box[1]==2){
            Color = 'Yellow';
        }
        if(Box[1]==3){
            Color = 'White';
        }
        if(Box[1]==4){
            Color = 'Black';
        }
    }
    document.getElementsByName('CatchElement')[0].innerText = Color;
 
});
//=========================================================
var Topicreset = new ROSLIB.Topic({
    ros: ros,
    name: '/reset',
    messageType: 'std_msgs/Empty'
});

function Pub_Reset() {
    let msg = new ROSLIB.Message({
    });
    Topicreset.publish(msg);
}
//===================================================================
var TopicStart = new ROSLIB.Topic({
    ros: ros,
    name: '/tb3/strategy/start',
    messageType: 'std_msgs/Int32'
});

function strategy_start(num) {
	num=parseInt(num);
    let msg = new ROSLIB.Message({
        data: num
    });
    TopicStart.publish(msg);
}
//===================================================================
var Topicarm = new ROSLIB.Topic({
    ros: ros,
    name: '/motion/tb3/arm',
    messageType: 'std_msgs/Int32'
});

function arm(num) {
	num=parseInt(num);
    let msg = new ROSLIB.Message({
        data: num
    });
    Topicarm.publish(msg);
}

//===================================================================
var Topicbattery = new ROSLIB.Topic({
    ros: ros,
    name: '/battery_state',
    messageType: 'sensor_msgs/BatteryState'
});

Topicbattery.subscribe(function(msg) {
    let batter_percent=Math.floor((msg.voltage-11.1)*100/(12.4-11.1));
    if(batter_percent<20){
        document.getElementById('batteryid').style.color = "red";
        document.getElementById('batteryid2').style.color = "red";
    }else{
        document.getElementById('batteryid').style.color = "black";
        document.getElementById('batteryid2').style.color = "black";
    }
    document.getElementById('batteryid').innerText = batter_percent;
});
//=================================
var odomcall = new ROSLIB.Topic({
    ros: ros,
    name: '/odom',
    messageType: 'nav_msgs/Odometry'
});
odomcall.subscribe(function(msg) {
    let x=0;
    let y=0;
    let angle=0;

    let _x=0;
    let _y=0;
    let _z=0;
    let _w=0;

    x=msg.pose.pose.position.x;
    x=Math.floor(x*100)/100;
    y=msg.pose.pose.position.y;
    y=Math.floor(y*100)/100;
    document.getElementsByName('StrategyElement')[0].innerText = x;
    document.getElementsByName('StrategyElement')[1].innerText = y;

    _x = msg.pose.pose.orientation.x;
    _y = msg.pose.pose.orientation.y;
    _z = msg.pose.pose.orientation.z;
    _w = msg.pose.pose.orientation.w;

    angle = Math.atan2(2 * (_x*_y + _w*_z), _w*_w + _x*_x - _y*_y - _z*_z)/3.14159*180;
    angle = Math.floor(angle*10)/10;
    document.getElementsByName('StrategyElement')[2].innerText = angle;
 
});

