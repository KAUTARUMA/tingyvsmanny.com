gdjs.schoolCode = {};
gdjs.schoolCode.localVariables = [];
gdjs.schoolCode.GDNewTextObjects1= [];
gdjs.schoolCode.GDNewTextObjects2= [];
gdjs.schoolCode.GDcoincounterObjects1= [];
gdjs.schoolCode.GDcoincounterObjects2= [];
gdjs.schoolCode.GDNewSpriteObjects1= [];
gdjs.schoolCode.GDNewSpriteObjects2= [];
gdjs.schoolCode.GDNewButtonObjects1= [];
gdjs.schoolCode.GDNewButtonObjects2= [];
gdjs.schoolCode.GDPlayerObjects1= [];
gdjs.schoolCode.GDPlayerObjects2= [];


gdjs.schoolCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("coincounter"), gdjs.schoolCode.GDcoincounterObjects1);
{for(var i = 0, len = gdjs.schoolCode.GDcoincounterObjects1.length ;i < len;++i) {
    gdjs.schoolCode.GDcoincounterObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "star.wav", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 35);
}
}
if (isConditionTrue_0) {
{gdjs.fileSystem.saveStringToFile("YOUR INSTRUCTION HAS BEGUN SUCCESSFULLY. REPORT YOUR SCORE TO THE DESIGNATED URL. PLEASE IGNORE THIS MESSAGE IF YOU DOWNLOADED THIS SOFTWARE FROM A REDISTRIBUTION CENTER. \n\nREDSTAR 3D", gdjs.fileSystem.getDesktopPath(runtimeScene), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.schoolCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.schoolCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.schoolCode.GDNewButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.schoolCode.GDNewButtonObjects1[k] = gdjs.schoolCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.schoolCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", true);
}}

}


};

gdjs.schoolCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.schoolCode.GDNewTextObjects1.length = 0;
gdjs.schoolCode.GDNewTextObjects2.length = 0;
gdjs.schoolCode.GDcoincounterObjects1.length = 0;
gdjs.schoolCode.GDcoincounterObjects2.length = 0;
gdjs.schoolCode.GDNewSpriteObjects1.length = 0;
gdjs.schoolCode.GDNewSpriteObjects2.length = 0;
gdjs.schoolCode.GDNewButtonObjects1.length = 0;
gdjs.schoolCode.GDNewButtonObjects2.length = 0;
gdjs.schoolCode.GDPlayerObjects1.length = 0;
gdjs.schoolCode.GDPlayerObjects2.length = 0;

gdjs.schoolCode.eventsList0(runtimeScene);
gdjs.schoolCode.GDNewTextObjects1.length = 0;
gdjs.schoolCode.GDNewTextObjects2.length = 0;
gdjs.schoolCode.GDcoincounterObjects1.length = 0;
gdjs.schoolCode.GDcoincounterObjects2.length = 0;
gdjs.schoolCode.GDNewSpriteObjects1.length = 0;
gdjs.schoolCode.GDNewSpriteObjects2.length = 0;
gdjs.schoolCode.GDNewButtonObjects1.length = 0;
gdjs.schoolCode.GDNewButtonObjects2.length = 0;
gdjs.schoolCode.GDPlayerObjects1.length = 0;
gdjs.schoolCode.GDPlayerObjects2.length = 0;


return;

}

gdjs['schoolCode'] = gdjs.schoolCode;
