var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Requestable } from '../../core';
var GetNearbyLocations = /** @class */ (function (_super) {
    __extends(GetNearbyLocations, _super);
    function GetNearbyLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetNearbyLocations.type = GetNearbyLocations.constructor.name;
    return GetNearbyLocations;
}(Requestable));
export { GetNearbyLocations };
//# sourceMappingURL=getNearbyLocations.js.map