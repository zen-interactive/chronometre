import { Component } from '@angular/core';
import { TimerService } from './timer.service';
import { StateService } from './state.service';

@Component({
    selector: 'chronometre',
    templateUrl: './app/timer/timer.component.html',
    providers: [TimerService, StateService]
})
export class TimerComponent {
    private _btnPlay: string = 'Démarrer';

    constructor(private _timer: TimerService, private _state: StateService){}

    play() {
        this._timer.start();
        this._state.setPlay();
        this._btnPlay = 'Continuer';
    }

    stop() {
        this._timer.stop();
        this._state.setStop();
    }

    backward() {
        this._timer.reset();
        this._state.setBackward();
        this._btnPlay = 'Démarrer'
    }
}