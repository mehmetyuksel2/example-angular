export class AuthService{
    loggedIn = false;
    redirectUrl!: string;
    IsAuthenticated(): Promise<boolean>{
        const promise = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn)
            }, 700);
        });
        return promise;
    }
    login(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }
}