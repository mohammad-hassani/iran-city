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
// will search cities of province by province name
const cities = __importStar(require("../../json/cities.json"));
const provinces = __importStar(require("../../json/provinces.json"));
function citiesOfProvince(nameOfProvince) {
    let PID;
    let Pcities = [];
    let provinceNotFund = true;
    for (let i = 0; i < Object.keys(provinces).length - 1; i++) {
        if (provinces[i].name == nameOfProvince) {
            PID = provinces[i].id;
            provinceNotFund = false;
        }
    }
    if (provinceNotFund) {
        return ['استان یافت نشد'];
    }
    for (let i = 0; i < Object.keys(cities).length - 1; i++) {
        if (cities[i].province_id == PID) {
            Pcities.push(cities[i]);
        }
    }
    return Pcities;
}
exports.default = citiesOfProvince;
