!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e.indicative=e.indicative||{},e.indicative.formatters={}))}(this,function(e){"use strict";function t(){this.errors=[]}t.prototype.addError=function(e,t,i){var o=e;e instanceof Error&&(i="ENGINE_EXCEPTION",o=e.message),this.errors.push({message:o,field:t,validation:i})},t.prototype.toJSON=function(){return this.errors},e.Vanilla=t,Object.defineProperty(e,"__esModule",{value:!0})});
