function formatPhoneNumber(str) {
    var Str = str.trim();
    if (Str.length == 10) {
        return '(' + Str[0] + Str[1] + Str[2] + ') ' + Str[3] + Str[4] + Str[5] + '-' + Str[6] + Str[7] + Str[8] + Str[9];
    }
    else {
        return "Invalid Phone Number";
    }
}
;
formatPhoneNumber('9809142333');
//To run this file, uncomment the following line
// console.log(formatPhoneNumber('9809142333'));
module.exports.formatPhoneNumber = formatPhoneNumber;
