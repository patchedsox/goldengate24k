import { GoldenGateHttp } from './provider';
var Requestable = /** @class */ (function () {
    function Requestable(value) {
        this.value = value;
        this.type = this.constructor.name;
    }
    Requestable.prototype.send = function () {
        return GoldenGateHttp
            .provider
            .post({
            body: this
        })
            .then(function (result) { return result.body; });
    };
    return Requestable;
}());
export { Requestable };
//# sourceMappingURL=requestable.js.map