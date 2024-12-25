export class Timer {
    private timeLeft: number;
    private timerId: number;
    private callback: (timeLeft: string) => void;

    constructor(minutes: number, callback: (timeLeft: string) => void) {
        this.timeLeft = minutes * 60;
        this.callback = callback;
    }

    start() {
        this.timerId = setInterval(() => {
            this.timeLeft--;
            const minutes = Math.floor(this.timeLeft / 60);
            const seconds = this.timeLeft % 60;
            this.callback(`${minutes}:${seconds.toString().padStart(2, '0')}`);
            
            if (this.timeLeft <= 0) {
                this.stop();
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.timerId);
    }
}