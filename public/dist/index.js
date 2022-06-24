"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
function handleAddCat(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, age, color, image, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    name = event.target.name.value;
                    age = event.target.age.valueAsNumber;
                    color = event.target.color.value;
                    image = event.target.image.value;
                    if (!name || !age || !color || !image)
                        throw new Error("All field are requierd");
                    return [4 /*yield*/, axios.post('/cats/add-cat', { name: name, age: age, color: color, image: image })];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Couldn't recive data from axios POST: /cats/add-cat ");
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleGetCats() {
    return __awaiter(this, void 0, void 0, function () {
        var data, catsDB, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log('get All Cats');
                    return [4 /*yield*/, axios.get('/cats/get-cats')];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Couldn't recive data from axios GET: /cats/get-cats ");
                    catsDB = data.catsDB, error = data.error;
                    console.log(catsDB);
                    if (error)
                        throw new Error(error);
                    rednerAllCats(catsDB);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleGetCatsByAge(event) {
    return __awaiter(this, void 0, void 0, function () {
        var age, data, catsDB, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    age = event.target.age.value;
                    return [4 /*yield*/, axios.patch('/cats/get-cats-age', { age: age })];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Couldn't recive data from axios GET: /cats/get-cats-age ");
                    catsDB = data.catsDB, error = data.error;
                    if (error)
                        throw new Error(error);
                    console.log(catsDB);
                    rednerAllCats(catsDB);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function rednerAllCats(cats) {
    var catsContainer = document.getElementById('catsContainer');
    var html = "";
    cats.forEach(function (cat) {
        html += "\n            <div class=\"cat\">\n                <h2>Name: " + cat.name + "</h2>\n                <p>Age: " + cat.age + "</p>\n                <p>Color: " + cat.color + "</p>\n                <img src=\"" + cat.image + "\" width=\"150px\" height=\"150px\" />\n            </div>\n        ";
    });
    catsContainer.innerHTML = html;
}
