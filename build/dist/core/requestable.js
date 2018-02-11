import { GoldenGateHttp } from './provider';
import { Uuid } from './uuid';
var Requestable = /** @class */ (function () {
    function Requestable(value) {
        this.value = value;
        this.type = this.constructor.name;
    }
    Requestable.prototype.send = function () {
        var body = {
            body: {
                type: this.type,
                value: this.value
            }
        };
        body.body.value.traceId = Uuid.v4();
        return GoldenGateHttp
            .provider
            .post(body)
            .then(function (result) { return result.body; });
    };
    return Requestable;
}());
export { Requestable };
//# sourceMappingURL=requestable.js.map