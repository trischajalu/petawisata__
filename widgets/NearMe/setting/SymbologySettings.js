// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/SymbologySettings.html":'\x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"btnAddSymbolsNode" class\x3d"esriCTAddSymbologyBtn" title\x3d"${nls.symbologySetting.addSymbologyBtnLabel}"\x3e\r\n        \x3cspan class\x3d"esriCTAddSymbologyIcon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"esriCTAddSymbologyLabel"\x3e${nls.symbologySetting.addSymbologyBtnLabel}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"symbologyTableAttachNode" class\x3d"esriCTAddLayerTableNode"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./SymbologySettings.html jimu/dijit/SimpleTable dojo/on dojo/dom-construct dojo/_base/lang dojo/string dojo/_base/array dojo/query dijit/form/Select dijit/form/ValidationTextBox dijit/form/NumberTextBox dojo/store/Memory ./SymbolChooserPopup jimu/symbolUtils jimu/utils esri/symbols/jsonUtils jimu/dijit/Message jimu/LayerInfos/LayerInfos dojo/promise/all jimu/dijit/LoadingIndicator".split(" "),function(v,
w,x,y,z,A,n,l,f,B,m,t,q,C,D,r,E,F,G,p,H,I,J,K){return v([w,x,y],{templateString:z,baseClass:"jimu-widget-nearme-setting-symbology",_layerNameStore:null,_layerFieldStore:{},_layerValuedStore:null,_layerDetails:{},_layerInfosObj:null,constructor:function(c){f.mixin(this,c)},postMixInProperties:function(){this.nls.common={};f.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this._layerNameStore=null;this._layerFieldStore={};this._layerValuedStore=null;this._layerDetails={};this.inherited(arguments);
this._initLoading();this._createSymbologyTable();this.own(n(this.btnAddSymbolsNode,"click",f.hitch(this,this._addSymbolBtnClicked)));I.getInstance(this.map,this.map.webMapResponse.itemInfo).then(f.hitch(this,function(c){this._layerInfosObj=c;this._loading.show();var a=[],b=[];a=c.getLayerInfoArray();a=a.concat(c.getTableInfoArray());m.forEach(a,f.hitch(this,function(d){b.push(d.getLayerObject());var e=[];(e=d.getSubLayers())&&0<e.length&&m.forEach(e,f.hitch(this,function(g){g&&g.layerObject&&!g.layerObject.empty&&
b.push(g.getLayerObject())}))}));J(b).then(f.hitch(this,function(){if(this.config.attributeSymbology&&0<Object.keys(this.config.attributeSymbology).length)for(var d in this.config.attributeSymbology)this.config.attributeSymbology[d].hasOwnProperty("layerId")?this._populateTableRows([this.config.attributeSymbology[d]],this.config.attributeSymbology[d].layerId):this._populateTableRows(this.config.attributeSymbology[d],d);else this._layerNameStore||this._createLayerNameStore();this._loading.hide()}),
f.hitch(this,function(){this._loading.hide()}))}))},_errorMessage:function(c){(new H({message:c})).message=c},_initLoading:function(){this._loading=new K({hidden:!0});var c=t(".widget-setting-popup")[0];this._loading.placeAt(c);this._loading.startup()},_populateTableRows:function(c,a){m.forEach(c,f.hitch(this,function(b){b.layerId=a;this._addLayerRow(b)}))},_createSymbologyTable:function(){this._symbologyTable=new A({fields:[{name:"field",title:this.nls.symbologySetting.layerNameTitle,type:"empty",
editable:!1,width:"30%"},{name:"field1",title:this.nls.symbologySetting.fieldTitle,type:"empty",editable:!0,width:"25%"},{name:"field2",title:this.nls.symbologySetting.valuesTitle,type:"empty",editable:!1,width:"20%"},{name:"field3",title:this.nls.symbologySetting.symbolTitle,type:"empty",editable:!1,width:"15%"},{name:"actions",title:this.nls.symbologySetting.actionsTitle,width:"10%",type:"actions",actions:["up","down","delete"]}],selectable:!1,autoHeight:!0});this._symbologyTable.placeAt(this.symbologyTableAttachNode);
this._symbologyTable.startup()},_addSymbolBtnClicked:function(){!this._layerNameStore||this._layerNameStore&&0>=this._layerNameStore.data.length?this._errorMessage(this.nls.errorStrings.selectLayerErrorString):this._addLayerRow()},_addLayerRow:function(c){var a;var b=this._symbologyTable.addRow({});if(a=t(".simple-table-cell",b.tr))b=b.tr,this._addLayerNameDropdown(a[0],b,c),this._addLayerFieldDropdown(a[1],b,c),this._addLayerValueDropdown(a[2],b,c),this._addSymbolPicker(a[3],b,c)},_addSymbolPicker:function(c,
a,b){var d={};a.symbol?d.symbol=p.fromJson(a.symbol):b&&b.symbol?d.symbol=p.fromJson(b.symbol):this.config&&this.config.symbols&&this.config.symbols.hasOwnProperty("graphicLocationSymbol")&&(d.symbol=p.fromJson(this.config.symbols.graphicLocationSymbol));var e={symbolChooserTitle:this._getFieldAlias(a),symbolParams:d,nls:this.nls,symbolType:"graphicLocationSymbol"},g=l.create("div",{style:"height: 27px;"},c);this._showSelectedSymbol(g,d.symbol,a);this.own(n(g,"click",f.hitch(this,function(){e.symbolChooserTitle=
this._getFieldAlias(a);e.symbolParams.symbol=p.fromJson(a.symbol);this._initSymbolChooserPopup(e,g,a)})))},_getFieldAlias:function(c){var a=c.layerNameDropDown.getValue();c=c.layerFieldDropDown.getValue();var b="";this._layerDetails[a]&&this._layerDetails[a].fields&&this._layerDetails[a].fields[c]&&this._layerDetails[a].fields[c].fieldAlias&&(b=this._layerDetails[a].fields[c].fieldAlias);return b},_initSymbolChooserPopup:function(c,a,b){var d=new E(c);d.onOkClick=f.hitch(this,function(){var e=d.symbolChooser.getSymbol();
this._showSelectedSymbol(a,e,b);d.popup.close()})},_showSelectedSymbol:function(c,a,b){l.empty(c);if(a){if(26<a.height){var d=f.clone(a.height);a.height=26}if(26<a.width){var e=f.clone(a.width);a.width=26}if(20<a.size){var g=f.clone(a.size);a.size=20}var h=F.createSymbolNode(a);h||(h=l.create("div"));l.place(h,c);d&&(a.height=d);e&&(a.width=e);g&&(a.size=g);b.symbol=a.toJson()}},_addLayerNameDropdown:function(c,a,b){c=l.create("div",{"class":"esriCTDropDownContainer"},c);this._layerNameStore||this._createLayerNameStore();
a.layerNameDropDown=new q({name:"layerSelect",store:this._layerNameStore,labelAttr:"name","class":"esriCTLayerNameDropdown"},c);a.layerNameDropDown.startup();b&&a.layerNameDropDown.set("value",b.layerId,!1);n(a.layerNameDropDown,"change",f.hitch(this,function(){this._createLayerFieldsStore(a);a.layerFieldDropDown.setStore(this._layerFieldStore);this._addLayerValueDropdown(a.cells[2],a,null)}));a.layerNameDropDown.startup()},_createLayerNameStore:function(c){var a=[];m.forEach(c||this.config.searchLayers,
f.hitch(this,function(b){a.push({name:b.title,value:b.id})}));this._layerNameStore=new r({idProperty:"value",data:a})},_addLayerFieldDropdown:function(c,a,b){l.empty(c);c=l.create("div",{"class":"esriCTDropDownContainer"},c);this._createLayerFieldsStore(a);a.layerFieldDropDown=new q({name:"fieldSelect",labelAttr:"name",store:this._layerFieldStore,"class":"esriCTLayerFieldDropDown"},c);n(a.layerFieldDropDown,"change",f.hitch(this,function(){this._addLayerValueDropdown(a.cells[2],a,null)}));b&&a.layerFieldDropDown.set("value",
b.fieldName,!1);a.layerFieldDropDown.startup()},_createLayerFieldsStore:function(c){var a=[];var b=c.layerNameDropDown.getValue();var d=this._layerInfosObj.getLayerInfoById(b).layerObject;this._layerDetails[b]||(this._layerDetails[b]={fields:{}});m.forEach(d.fields,f.hitch(this,function(e){var g;if(-1==="esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" ").indexOf(e.type)){var h=e.name;if(!this._layerDetails[b].fields[h])if(this._layerDetails[b].fields[h]=
{},this._layerDetails[b].fields[h].fieldAlias=e.alias,g=d.getDomain(h)){g=f.clone(g);if(g.codedValues){var k=G.getCodedValueListForCodedValueOrSubTypes(d,h);g.codedValues=f.clone(k)}this._layerDetails[b].fields[h].codedDomainStore=this._getCodedDomainStore(g);this._layerDetails[b].fields[h].type=g.type}else this._layerDetails[b].fields[h].codedDomainStore=null;a.push({name:e.alias||e.name,value:e.name})}}));this._layerFieldStore=new r({idProperty:"value",data:a})},_getCodedDomainStore:function(c){var a=
[];m.forEach(c.codedValues,f.hitch(this,function(b){a.push({name:b.label,value:b.value})}));return new r({idProperty:"value",data:a})},_addLayerValueDropdown:function(c,a,b){l.empty(c);var d=a.layerNameDropDown.getValue();var e=a.layerFieldDropDown.getValue();var g=l.create("div",{"class":"esriCTDropDownContainer esriCTLayerFieldDropDown"},c);c=l.create("div",{"class":"esriCTDropDownContainer esriCTLayerFieldDropDown"},c);var h=this._layerDetails[d].fields[e].codedDomainStore;var k=this._layerDetails[d].fields[e];
h&&"codedValue"===k.type?(a.layerValueDropDown=new q({name:"valuesSelect",labelAttr:"name",store:h,"class":"esriCTLayerValuedDropDown"},g),a.layerValueDropDown.startup(),b&&a.layerValueDropDown.set("value",b.fieldValue)):h&&"range"===k.type?(b=this._layerInfosObj.getLayerInfoById(d).layerObject,e=b.getDomain(e),a.valueTextBox=new D({"class":"esriCTLayerValuedDropDown",constraints:{min:e.minValue,max:e.maxValue}},c),a.valueTextBox.startup()):(a.valueTextBox=new C({"class":"esriCTLayerValuedDropDown"},
c),a.valueTextBox.startup(),b&&a.valueTextBox.set("value",b.fieldValue))},updateLayerOptions:function(c){var a;this._createLayerNameStore(c);m.forEach(this._symbologyTable.getRows(),f.hitch(this,function(b){b.layerNameDropDown&&0<this._layerNameStore.query({value:b.layerNameDropDown.getValue()}).length?(a=b.layerNameDropDown.getValue(),b.layerNameDropDown.setStore(this._layerNameStore),b.layerNameDropDown.set("value",a,!1),a!==b.layerNameDropDown.getValue()&&(b.layerFieldDropDown&&(this._createLayerFieldsStore(b),
b.layerFieldDropDown.setStore(this._layerFieldStore)),this._addLayerValueDropdown(b.cells[2],b,null))):this._symbologyTable.deleteRow(b)}))},getConfig:function(){var c={},a,b,d,e=!0,g=[];m.forEach(this._symbologyTable.getRows(),f.hitch(this,function(k){k.layerNameDropDown&&(d=k.layerNameDropDown.getValue(),b=this._layerInfosObj.getLayerInfoById(d).layerObject,a={},a.layerId=d,a.fieldName=k.layerFieldDropDown.getValue(),b.getDomain(a.fieldName)?a.fieldValue=k.layerValueDropDown.getValue():a.fieldValue=
k.valueTextBox.getValue(),k.symbol&&(a.symbol=k.symbol),c.hasOwnProperty(d)||(c[d]=[]),m.forEach(c[d],f.hitch(this,function(u){if(u.fieldName===a.fieldName&&u.fieldValue===a.fieldValue)return e=!1,!0})),c[d].push(a),g.push(a))}));if(e)return{isValid:e,symbolConfig:g};var h=B.substitute(this.nls.symbologySetting.invalidConfigMsg,{fieldName:a.fieldName,layerName:b.name});return{isValid:e,message:h}}})});