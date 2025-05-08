gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDtoptopObjects1= [];
gdjs.introCode.GDtoptopObjects2= [];
gdjs.introCode.GDtypenameObjects1= [];
gdjs.introCode.GDtypenameObjects2= [];
gdjs.introCode.GDbgObjects1= [];
gdjs.introCode.GDbgObjects2= [];
gdjs.introCode.GDstartObjects1= [];
gdjs.introCode.GDstartObjects2= [];
gdjs.introCode.GDPlayerObjects1= [];
gdjs.introCode.GDPlayerObjects2= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("typename"), gdjs.introCode.GDtypenameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDtypenameObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDtypenameObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDtypenameObjects1[k] = gdjs.introCode.GDtypenameObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDtypenameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.introCode.GDstartObjects1);
gdjs.copyArray(runtimeScene.getObjects("toptop"), gdjs.introCode.GDtoptopObjects1);
{for(var i = 0, len = gdjs.introCode.GDtoptopObjects1.length ;i < len;++i) {
    gdjs.introCode.GDtoptopObjects1[i].getBehavior("Text").setText("THROUGH CLASSIFICATION INSTRUCTION, YOU HAVE BEEN DIVIDED INTO GRANDFANDO SCHOOL.\n\nBEGIN YOUR INSTRUCTION BY COMPLETING REDSTAR CHALLENGE.");
}
}{for(var i = 0, len = gdjs.introCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.introCode.GDstartObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.introCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.introCode.GDstartObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.introCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDstartObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDstartObjects1[k] = gdjs.introCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDstartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDstartObjects1[k] = gdjs.introCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDstartObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", true);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDtoptopObjects1.length = 0;
gdjs.introCode.GDtoptopObjects2.length = 0;
gdjs.introCode.GDtypenameObjects1.length = 0;
gdjs.introCode.GDtypenameObjects2.length = 0;
gdjs.introCode.GDbgObjects1.length = 0;
gdjs.introCode.GDbgObjects2.length = 0;
gdjs.introCode.GDstartObjects1.length = 0;
gdjs.introCode.GDstartObjects2.length = 0;
gdjs.introCode.GDPlayerObjects1.length = 0;
gdjs.introCode.GDPlayerObjects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);
gdjs.introCode.GDtoptopObjects1.length = 0;
gdjs.introCode.GDtoptopObjects2.length = 0;
gdjs.introCode.GDtypenameObjects1.length = 0;
gdjs.introCode.GDtypenameObjects2.length = 0;
gdjs.introCode.GDbgObjects1.length = 0;
gdjs.introCode.GDbgObjects2.length = 0;
gdjs.introCode.GDstartObjects1.length = 0;
gdjs.introCode.GDstartObjects2.length = 0;
gdjs.introCode.GDPlayerObjects1.length = 0;
gdjs.introCode.GDPlayerObjects2.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
