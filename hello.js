/**
 * Created by yusuke on 2017/07/16.
 */
function max(arg1, arg2) {
    var arg1isBigger = arg1 > arg2;
    console.log(arg1isBigger);
    if (arg1isBigger) {
        return arg1;
    }
    return arg2;
}