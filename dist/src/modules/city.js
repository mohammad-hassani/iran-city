"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities = __importStar(require("../../json/cities.json"));
function city() {
    let citiesArray = [];
    for (let i = 0; i < Object.keys(cities).length - 1; i++) {
        citiesArray.push(cities[i].name);
        console.log(citiesArray[i]);
    }
    return citiesArray;
}
function citiesOfProvince(PID) {
    let Pcities = [];
    for (let i = 0; i < Object.keys(cities).length - 1; i++) {
        if (cities[i].province_id == PID) {
            Pcities.push(cities[i].name);
            console.log(Pcities[i]);
        }
    }
    return Pcities;
}
exports.default = { city, citiesOfProvince };
