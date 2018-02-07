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
var SearchNearbyLocations = /** @class */ (function (_super) {
    __extends(SearchNearbyLocations, _super);
    function SearchNearbyLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchNearbyLocations.type = SearchNearbyLocations.constructor.name;
    return SearchNearbyLocations;
}(Requestable));
export { SearchNearbyLocations };
//# sourceMappingURL=searchNearbyLocations.js.map