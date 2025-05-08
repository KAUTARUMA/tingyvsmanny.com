gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDObstacleObjects1= [];
gdjs.Game_32SceneCode.GDObstacleObjects2= [];
gdjs.Game_32SceneCode.GDObstacleObjects3= [];
gdjs.Game_32SceneCode.GDCoinObjects1= [];
gdjs.Game_32SceneCode.GDCoinObjects2= [];
gdjs.Game_32SceneCode.GDCoinObjects3= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects1= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects2= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects3= [];
gdjs.Game_32SceneCode.GDSkyboxObjects1= [];
gdjs.Game_32SceneCode.GDSkyboxObjects2= [];
gdjs.Game_32SceneCode.GDSkyboxObjects3= [];
gdjs.Game_32SceneCode.GDwallObjects1= [];
gdjs.Game_32SceneCode.GDwallObjects2= [];
gdjs.Game_32SceneCode.GDwallObjects3= [];
gdjs.Game_32SceneCode.GDmysteryObjects1= [];
gdjs.Game_32SceneCode.GDmysteryObjects2= [];
gdjs.Game_32SceneCode.GDmysteryObjects3= [];
gdjs.Game_32SceneCode.GDtutorialObjects1= [];
gdjs.Game_32SceneCode.GDtutorialObjects2= [];
gdjs.Game_32SceneCode.GDtutorialObjects3= [];
gdjs.Game_32SceneCode.GDFlatHeartBarObjects1= [];
gdjs.Game_32SceneCode.GDFlatHeartBarObjects2= [];
gdjs.Game_32SceneCode.GDFlatHeartBarObjects3= [];
gdjs.Game_32SceneCode.GDdeathplaneObjects1= [];
gdjs.Game_32SceneCode.GDdeathplaneObjects2= [];
gdjs.Game_32SceneCode.GDdeathplaneObjects3= [];
gdjs.Game_32SceneCode.GDhouseObjects1= [];
gdjs.Game_32SceneCode.GDhouseObjects2= [];
gdjs.Game_32SceneCode.GDhouseObjects3= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects1= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects2= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects3= [];
gdjs.Game_32SceneCode.GDObstacleMovingObjects1= [];
gdjs.Game_32SceneCode.GDObstacleMovingObjects2= [];
gdjs.Game_32SceneCode.GDObstacleMovingObjects3= [];
gdjs.Game_32SceneCode.GDenemyObjects1= [];
gdjs.Game_32SceneCode.GDenemyObjects2= [];
gdjs.Game_32SceneCode.GDenemyObjects3= [];
gdjs.Game_32SceneCode.GDcoin_9595counterObjects1= [];
gdjs.Game_32SceneCode.GDcoin_9595counterObjects2= [];
gdjs.Game_32SceneCode.GDcoin_9595counterObjects3= [];
gdjs.Game_32SceneCode.GDcoingvbObjects1= [];
gdjs.Game_32SceneCode.GDcoingvbObjects2= [];
gdjs.Game_32SceneCode.GDcoingvbObjects3= [];
gdjs.Game_32SceneCode.GDmazObjects1= [];
gdjs.Game_32SceneCode.GDmazObjects2= [];
gdjs.Game_32SceneCode.GDmazObjects3= [];
gdjs.Game_32SceneCode.GDislandObjects1= [];
gdjs.Game_32SceneCode.GDislandObjects2= [];
gdjs.Game_32SceneCode.GDislandObjects3= [];
gdjs.Game_32SceneCode.GDLargeBuildingAObjects1= [];
gdjs.Game_32SceneCode.GDLargeBuildingAObjects2= [];
gdjs.Game_32SceneCode.GDLargeBuildingAObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Object3D").setRotationY(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getRotationY()), -(90), 90));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), -(90), 90), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__IsMoving.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetCameraRotation(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").RotationAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (180 * gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (90 * gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (Math.abs(gdjs.evtTools.common.angleDifference(90, gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) < 90);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(180 - (gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("ThirdPersonCamera").TargetedRotationAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 90, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0))) > 90);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects2});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16821932);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdeathplaneObjects1Objects = Hashtable.newFrom({"deathplane": gdjs.Game_32SceneCode.GDdeathplaneObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Game_32SceneCode.GDenemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLargeBuildingAObjects1Objects = Hashtable.newFrom({"LargeBuildingA": gdjs.Game_32SceneCode.GDLargeBuildingAObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, 50, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\PickupCoin.wav", false, 100, gdjs.randomFloatInRange(1.1, 1.3));
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects1[i].rotate(35, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("coin_counter"), gdjs.Game_32SceneCode.GDcoin_9595counterObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcoin_9595counterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcoin_9595counterObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.Game_32SceneCode.eventsList0(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("deathplane"), gdjs.Game_32SceneCode.GDdeathplaneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.isOnPlatform(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, "PhysicsCharacter3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdeathplaneObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "level 1.ogg", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.Game_32SceneCode.GDtutorialObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDtutorialObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDtutorialObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "jump1.ogg", 1, false, 100, gdjs.randomFloatInRange(0.8, 1.7));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Game_32SceneCode.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDenemyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, 100, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Health").Hit(1, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hurt.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeBuildingA"), gdjs.Game_32SceneCode.GDLargeBuildingAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLargeBuildingAObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, 885, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "school", true);
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDwallObjects1.length = 0;
gdjs.Game_32SceneCode.GDwallObjects2.length = 0;
gdjs.Game_32SceneCode.GDwallObjects3.length = 0;
gdjs.Game_32SceneCode.GDmysteryObjects1.length = 0;
gdjs.Game_32SceneCode.GDmysteryObjects2.length = 0;
gdjs.Game_32SceneCode.GDmysteryObjects3.length = 0;
gdjs.Game_32SceneCode.GDtutorialObjects1.length = 0;
gdjs.Game_32SceneCode.GDtutorialObjects2.length = 0;
gdjs.Game_32SceneCode.GDtutorialObjects3.length = 0;
gdjs.Game_32SceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDFlatHeartBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDdeathplaneObjects1.length = 0;
gdjs.Game_32SceneCode.GDdeathplaneObjects2.length = 0;
gdjs.Game_32SceneCode.GDdeathplaneObjects3.length = 0;
gdjs.Game_32SceneCode.GDhouseObjects1.length = 0;
gdjs.Game_32SceneCode.GDhouseObjects2.length = 0;
gdjs.Game_32SceneCode.GDhouseObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleMovingObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleMovingObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleMovingObjects3.length = 0;
gdjs.Game_32SceneCode.GDenemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDenemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDenemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595counterObjects1.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595counterObjects2.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595counterObjects3.length = 0;
gdjs.Game_32SceneCode.GDcoingvbObjects1.length = 0;
gdjs.Game_32SceneCode.GDcoingvbObjects2.length = 0;
gdjs.Game_32SceneCode.GDcoingvbObjects3.length = 0;
gdjs.Game_32SceneCode.GDmazObjects1.length = 0;
gdjs.Game_32SceneCode.GDmazObjects2.length = 0;
gdjs.Game_32SceneCode.GDmazObjects3.length = 0;
gdjs.Game_32SceneCode.GDislandObjects1.length = 0;
gdjs.Game_32SceneCode.GDislandObjects2.length = 0;
gdjs.Game_32SceneCode.GDislandObjects3.length = 0;
gdjs.Game_32SceneCode.GDLargeBuildingAObjects1.length = 0;
gdjs.Game_32SceneCode.GDLargeBuildingAObjects2.length = 0;
gdjs.Game_32SceneCode.GDLargeBuildingAObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList4(runtimeScene);
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDwallObjects1.length = 0;
gdjs.Game_32SceneCode.GDwallObjects2.length = 0;
gdjs.Game_32SceneCode.GDwallObjects3.length = 0;
gdjs.Game_32SceneCode.GDmysteryObjects1.length = 0;
gdjs.Game_32SceneCode.GDmysteryObjects2.length = 0;
gdjs.Game_32SceneCode.GDmysteryObjects3.length = 0;
gdjs.Game_32SceneCode.GDtutorialObjects1.length = 0;
gdjs.Game_32SceneCode.GDtutorialObjects2.length = 0;
gdjs.Game_32SceneCode.GDtutorialObjects3.length = 0;
gdjs.Game_32SceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDFlatHeartBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDdeathplaneObjects1.length = 0;
gdjs.Game_32SceneCode.GDdeathplaneObjects2.length = 0;
gdjs.Game_32SceneCode.GDdeathplaneObjects3.length = 0;
gdjs.Game_32SceneCode.GDhouseObjects1.length = 0;
gdjs.Game_32SceneCode.GDhouseObjects2.length = 0;
gdjs.Game_32SceneCode.GDhouseObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleMovingObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleMovingObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleMovingObjects3.length = 0;
gdjs.Game_32SceneCode.GDenemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDenemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDenemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595counterObjects1.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595counterObjects2.length = 0;
gdjs.Game_32SceneCode.GDcoin_9595counterObjects3.length = 0;
gdjs.Game_32SceneCode.GDcoingvbObjects1.length = 0;
gdjs.Game_32SceneCode.GDcoingvbObjects2.length = 0;
gdjs.Game_32SceneCode.GDcoingvbObjects3.length = 0;
gdjs.Game_32SceneCode.GDmazObjects1.length = 0;
gdjs.Game_32SceneCode.GDmazObjects2.length = 0;
gdjs.Game_32SceneCode.GDmazObjects3.length = 0;
gdjs.Game_32SceneCode.GDislandObjects1.length = 0;
gdjs.Game_32SceneCode.GDislandObjects2.length = 0;
gdjs.Game_32SceneCode.GDislandObjects3.length = 0;
gdjs.Game_32SceneCode.GDLargeBuildingAObjects1.length = 0;
gdjs.Game_32SceneCode.GDLargeBuildingAObjects2.length = 0;
gdjs.Game_32SceneCode.GDLargeBuildingAObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
