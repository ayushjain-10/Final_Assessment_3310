function formatPhoneNumber(str) {
    var Str = str.trim();
    if (Str.length == 10) {
        return '(' + Str.slice(0,3) + ') ' + Str.slice(3,6) + '-' + Str.slice(6,10);
    }
    else {
        return "Invalid Phone Number";
    }
}
;
formatPhoneNumber('9809142333');
//To run this file, uncomment the following line
console.log(formatPhoneNumber('9809142333'));
module.exports.formatPhoneNumber = formatPhoneNumber;
