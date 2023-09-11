import bcrypt from 'bcrypt';

class HashingOfPassword{
    static createPasswordHash = async(plainPassword: string) => {
        try {
            return await bcrypt.hash(plainPassword,5);
        } catch (error) {
            console.error('There is an error in create Password Hash function\n',error.message);
        }
    }

    static passwordMatching = async(userPAssword: any, DbPassword: any) => {
        try {
            return await bcrypt.compare(userPAssword,DbPassword);
        } catch (error) {
            console.error('There is some error in password matching function\n',error.message);
        }
    }
}
export default HashingOfPassword;