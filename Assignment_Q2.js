function validOtp(OTP) {
    if (typeof OTP !== "string") {
        return "Invalid";
    }
    if (OTP.length !== 8) {
        return false;
    }
    if (!OTP.startsWith("ph-")) {
        return false;
    }
    return true;
}