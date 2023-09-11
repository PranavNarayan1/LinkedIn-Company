class GenerateOtp{
    static generateOtp = async(min=100000,max=900000) => {
        return Math.floor(min + Math.random() * max);
    }
}
export default GenerateOtp;