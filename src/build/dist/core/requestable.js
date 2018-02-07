import { GoldenGateHttp } from './provider';
var Requestable = /** @class */ (function () {
    function Requestable(body) {
        this.body = body;
    }
    Requestable.prototype.send = function () {
        return GoldenGateHttp
            .provider
            .post({ body: this.body })
            .then(function (result) { return result.body; });
    };
    return Requestable;
}());
export { Requestable };
//# sourceMappingURL=requestable.js.map