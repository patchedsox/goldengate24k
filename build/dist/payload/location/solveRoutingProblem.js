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
var TYPE = 'SolveRoutingProblem';
var SolveRoutingProblem = /** @class */ (function (_super) {
    __extends(SolveRoutingProblem, _super);
    function SolveRoutingProblem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TYPE;
        return _this;
    }
    return SolveRoutingProblem;
}(Requestable));
export { SolveRoutingProblem };
//# sourceMappingURL=solveRoutingProblem.js.map