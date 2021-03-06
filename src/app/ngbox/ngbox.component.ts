import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, DoCheck } from '@angular/core';
import { NgBoxService } from './ngbox.service';


@Component({
    selector: 'my-ngbox, ngbox',
    template: `
        <div id="ngBoxLoading" *ngIf="ngBox.loading"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNv
        ZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cD
        ovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRo
        PSIxNjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTI4IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c2NyaXB0IHR5cGU9InRleHQvZW
        NtYXNjcmlwdCIgeGxpbms6aHJlZj0iLy9wcmVsb2FkZXJzLm5ldC9qc2NyaXB0cy9zbWlsLnVzZXIuanMiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBm
        aWxsLW9wYWNpdHk9IjAuNDE5NjA3ODQzMTM3MjUiIGQ9Ik02LjQsNC44QTMuMiwzLjIsMCwxLDEsMy4yLDgsMy4yLDMuMiwwLDAsMSw2LjQsNC44Wm
        0xMi44LDBBMy4yLDMuMiwwLDEsMSwxNiw4LDMuMiwzLjIsMCwwLDEsMTkuMiw0LjhaTTMyLDQuOEEzLjIsMy4yLDAsMSwxLDI4LjgsOCwzLjIsMy4y
        LDAsMCwxLDMyLDQuOFptMTIuOCwwQTMuMiwzLjIsMCwxLDEsNDEuNiw4LDMuMiwzLjIsMCwwLDEsNDQuOCw0LjhabTEyLjgsMEEzLjIsMy4yLDAsMS
        wxLDU0LjQsOCwzLjIsMy4yLDAsMCwxLDU3LjYsNC44Wm0xMi44LDBBMy4yLDMuMiwwLDEsMSw2Ny4yLDgsMy4yLDMuMiwwLDAsMSw3MC40LDQuOFpt
        MTIuOCwwQTMuMiwzLjIsMCwxLDEsODAsOCwzLjIsMy4yLDAsMCwxLDgzLjIsNC44Wk05Niw0LjhBMy4yLDMuMiwwLDEsMSw5Mi44LDgsMy4yLDMuMi
        wwLDAsMSw5Niw0LjhabTEyLjgsMEEzLjIsMy4yLDAsMSwxLDEwNS42LDgsMy4yLDMuMiwwLDAsMSwxMDguOCw0LjhabTEyLjgsMEEzLjIsMy4yLDAs
        MSwxLDExOC40LDgsMy4yLDMuMiwwLDAsMSwxMjEuNiw0LjhaIi8+PGc+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNLT
        QyLjcsMy44NEE0LjE2LDQuMTYsMCwwLDEtMzguNTQsOGE0LjE2LDQuMTYsMCwwLDEtNC4xNiw0LjE2QTQuMTYsNC4xNiwwLDAsMS00Ni44Niw4LDQu
        MTYsNC4xNiwwLDAsMS00Mi43LDMuODRabTEyLjgtLjY0QTQuOCw0LjgsMCwwLDEtMjUuMSw4YTQuOCw0LjgsMCwwLDEtNC44LDQuOEE0LjgsNC44LD
        AsMCwxLTM0LjcsOCw0LjgsNC44LDAsMCwxLTI5LjksMy4yWm0xMi44LS42NEE1LjQ0LDUuNDQsMCwwLDEtMTEuNjYsOGE1LjQ0LDUuNDQsMCwwLDEt
        NS40NCw1LjQ0QTUuNDQsNS40NCwwLDAsMS0yMi41NCw4LDUuNDQsNS40NCwwLDAsMS0xNy4xLDIuNTZaIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cm
        lidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMjMgMDszNiAwOzQ5IDA7NjIgMDs3NC41IDA7ODcuNSAwOzEwMCAw
        OzExMyAwOzEyNS41IDA7MTM4LjUgMDsxNTEuNSAwOzE2NC41IDA7MTc4IDAiIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSI3ODBtcyIgcmVwZWF0Q2
        91bnQ9ImluZGVmaW5pdGUiLz48L2c+PC9zdmc+Cg=="/></div>
        <div id="ngBoxWrapper" (click)="closeOutside($event)" *ngIf="ngBox.open" [ngStyle]="{'padding-top': offsetHeight+'px'}">
        <img (click)="closeNgBox()" id="closeButton" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+C
        jxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG
        luayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE3NC4yMzkgMTc0LjIzOSIgc3R
        5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTc0LjIzOSAxNzQuMjM5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUx
        MnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik04Ny4xMiwwQzM5LjA4MiwwLDAsMzkuMDgyLDAsODcuM
        TJzMzkuMDgyLDg3LjEyLDg3LjEyLDg3LjEyczg3LjEyLTM5LjA4Miw4Ny4xMi04Ny4xMlMxMzUuMTU3LDAsODcuMTIsMHogTTg3LjEyLD
        E1OS4zMDUgICBjLTM5LjgwMiwwLTcyLjE4NS0zMi4zODMtNzIuMTg1LTcyLjE4NVM0Ny4zMTgsMTQuOTM1LDg3LjEyLDE0LjkzNXM3Mi4
        xODUsMzIuMzgzLDcyLjE4NSw3Mi4xODVTMTI2LjkyMSwxNTkuMzA1LDg3LjEyLDE1OS4zMDV6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAw
        IiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRENEQkRCIiBmaWxsPSIjRENEQ0RDIi8+Cgk8cGF0aCBkPSJNMTIwL
        jgzLDUzLjQxNGMtMi45MTctMi45MTctNy42NDctMi45MTctMTAuNTU5LDBMODcuMTIsNzYuNTY4TDYzLjk2OSw1My40MTRjLTIuOTE3LT
        IuOTE3LTcuNjQyLTIuOTE3LTEwLjU1OSwwICAgcy0yLjkxNyw3LjY0MiwwLDEwLjU1OWwyMy4xNTEsMjMuMTUzTDUzLjQwOSwxMTAuMjh
        jLTIuOTE3LDIuOTE3LTIuOTE3LDcuNjQyLDAsMTAuNTU5YzEuNDU4LDEuNDU4LDMuMzY5LDIuMTg4LDUuMjgsMi4xODggICBjMS45MTEs
        MCwzLjgyNC0wLjcyOSw1LjI4LTIuMTg4TDg3LjEyLDk3LjY4NmwyMy4xNTEsMjMuMTUzYzEuNDU4LDEuNDU4LDMuMzY5LDIuMTg4LDUuM
        jgsMi4xODhjMS45MTEsMCwzLjgyMS0wLjcyOSw1LjI4LTIuMTg4ICAgYzIuOTE3LTIuOTE3LDIuOTE3LTcuNjQyLDAtMTAuNTU5TDk3Lj
        Y3OSw4Ny4xMjdsMjMuMTUxLTIzLjE1M0MxMjMuNzQ3LDYxLjA1NywxMjMuNzQ3LDU2LjMzMSwxMjAuODMsNTMuNDE0eiIgZGF0YS1vcml
        naW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0RDREJEQiIgZmlsbD0iI0RDRENEQyIvPgo8
        L2c+PC9nPiA8L3N2Zz4K">
            <div id="ngBoxContent">
                <img *ngIf="getHasGroup()" class="left" (click)="previousNgBox()" src="data:image/svg+xml;base64,
                PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGlua
                z0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweC
                Igd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNzkyLjA4MiA3OTIuMDgyIiBzdHlsZT0iZW5hYmx
                lLWJhY2tncm91bmQ6bmV3IDAgMCA3OTIuMDgyIDc5Mi4wODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4KCTxnIGlk
                PSJfeDM3X18zNF8iPgoJCTxnPgoJCQk8cGF0aCBkPSJNMzE3Ljg5NiwzOTYuMDI0bDMwNC43NDktMjc2LjQ2N2MyNy4zNi0yN
                y4zNiwyNy4zNi03MS42NzcsMC05OS4wMzdzLTcxLjY3Ny0yNy4zNi05OS4wMzYsMEwxNjkuMTEsMzQyLjE2MSAgICAgYy0xNC
                43ODMsMTQuNzgzLTIxLjMwMiwzNC41MzgtMjAuMDg0LDUzLjg5N2MtMS4yMTgsMTkuMzU5LDUuMzAxLDM5LjExNCwyMC4wODQ
                sNTMuODk3bDM1NC41MzEsMzIxLjYwNiAgICAgYzI3LjM2LDI3LjM2LDcxLjY3NywyNy4zNiw5OS4wMzcsMHMyNy4zNi03MS42
                NzcsMC05OS4wMzZMMzE3Ljg5NiwzOTYuMDI0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoI
                iBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0JBQjlCOSIvPgoJCTwvZz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+Cg
                ==">
                <img *ngIf="getHasGroup()" class="right" (click)="nextNgBox()" src="data:image/svg+xml;base64,PD9
                4bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0i
                aHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd
                2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNzkyLjA0OSA3OTIuMDQ5IiBzdHlsZT0iZW5hYmxlLW
                JhY2tncm91bmQ6bmV3IDAgMCA3OTIuMDQ5IDc5Mi4wNDk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4KCTxnIGlkPSJ
                feDM4X18zNV8iPgoJCTxnPgoJCQk8cGF0aCBkPSJNNjIyLjk1NSwzNDIuMTI3TDI2OC40MjQsMjAuNTIxYy0yNy4zNi0yNy4z
                Ni03MS42NzctMjcuMzYtOTkuMDM3LDBjLTI3LjM2LDI3LjM2LTI3LjM2LDcxLjY3NiwwLDk5LjAzNyAgICAgbDMwNC43NDksM
                jc2LjQ2OEwxNjkuMzg3LDY3Mi40OTJjLTI3LjM2LDI3LjM1OS0yNy4zNiw3MS42NzYsMCw5OS4wMzZzNzEuNjc3LDI3LjM2LD
                k5LjAzNywwbDM1NC41MzEtMzIxLjYwNiAgICAgYzE0Ljc4My0xNC43ODMsMjEuMzAyLTM0LjUzOCwyMC4wODQtNTMuODk3QzY
                0NC4yMjUsMzc2LjY2NSw2MzcuNzM4LDM1Ni45MTEsNjIyLjk1NSwzNDIuMTI3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIg
                Y2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0JBQjlCOSIvPgoJCTwvZz4KCTwvZ
                z4KPC9nPjwvZz4gPC9zdmc+Cg==">
                <img *ngIf="ngBox.current.type == 1"
                     (load)="isLoaded()" 
                     #ngBoxContent 
                     [src]="ngBox.current.url"
                     [hidden]="ngBox.loading" 
                     (click)="nextNgBox()"
                     alt="">
                <iframe *ngIf="ngBox.current.type == 2" 
                        #ngBoxContent
                        [src]="ngBox.current.url"
                        width="{{ngBox.current.width}}"
                        height="{{ngBox.current.height}}"
                        frameborder="0"
                        allowfullscreen>
                </iframe>
                <iframe *ngIf="ngBox.current.type == 3" 
                        [src]="ngBox.current.url"
                        #ngBoxContent
                        width="{{ngBox.current.width}}"
                        height="{{ngBox.current.height}}"
                        frameborder="0" 
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowfullscreen>
                </iframe>
                <video *ngIf="ngBox.current.type == 4" 
                    #ngBoxContent
                    controls 
                    controlsList="nodownload"
                    [src]="ngBox.current.url"
                    width="{{ngBox.current.width}}"
                    height="{{ngBox.current.height}}">
                </video>
            </div>
            <div #ngBoxButtons id="buttons" [hidden]="ngBox.loading">
                <p>
                    <span class="title" *ngIf="ngBox.current.title">{{ngBox.current.title}}<br/></span>
                    <span class="pages" *ngIf="getHasGroup()">{{getCurrentIndex()}} of {{getCount()}}</span>
                </p>
            </div>


            
            
            

        </div>
    `,
    styles: [`
        #ngBoxLoading{
            text-align: center;
            z-index: 10001;
            width: 100%;
            height: 100%;
            color: white;
            position: fixed;
            top: 46%;
            font-size: 20px;
        }
        #ngBoxWrapper {
            background-color: rgba(0, 0, 0, 0.9);
            position: fixed;
            top: 0px;
            left: 0px;
            text-align: center;
            z-index: 10000;
            width: 100%;
            height: 100%;
        }

        #ngBoxWrapper #ngBoxContent img {
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }

        #ngBoxContent {
            display: block;
        }

        button {
            font-size: 12px;
        }

        iframe {
            max-width: 100%;
            max-height: 100%;
        }
        #buttons{
            position: relative;
            margin: 5px auto;
            text-align: right;
        }
        #buttons p{
            float: left;
            color: white;
            text-align: left;
            margin: 0 50px 0 0;
            font-size: 12px;
            font-family: sans-serif;
        }
        #buttons span.title{
            display: block;
            height: 18px;
            overflow: hidden;
        }
        #closeButton{
            position: absolute;
            top: 0px;
            left: 0px;
            background-size: 30px 30px;
            width: 30px; height: 30px;
            margin: 15px;
            cursor: pointer;
            z-index: 1;     
        }
        .left{
            position: fixed;
            left: -5px;
            margin-top: -42px;
            cursor: pointer;
            top: 50%;
            width: 50px; height: 50px;
            padding: 30px;
            z-index: 1;            
        }
        .right{
            position: fixed;
            right: -10px;
            margin-top: -42px;
            cursor: pointer;
            top: 50%;
            width: 50px; height: 50px;
            padding: 30px;
            z-index: 1;             
        }
    `]
})
export class NgBoxComponent implements DoCheck {

    offsetHeight: number;
    interval: any;
    @Input() data: any;
    @Output() showMore = new EventEmitter();
    @ViewChild('ngBoxContent') elementView: ElementRef;
    @ViewChild('ngBoxButtons') elementButtons: ElementRef;

    constructor(
        public ngBox: NgBoxService
    ) {
    }

    ngDoCheck() {
        if (this.ngBox.open === true && this.elementView === undefined) {
            this.checkInterval();
        }
    }

    closeOutside($event) {
        if ($event.target.getAttribute('id') === 'ngBoxContent' || $event.target.getAttribute('id') === 'ngBoxWrapper') {
            this.closeNgBox();
        }
    }

    checkInterval() {
        let t = setInterval(() => {
            if (this.elementView && this.elementButtons  ) {
                this.resize();
                // Stop Loading on frames
                if (this.ngBox.current.type === 2 || this.ngBox.current.type === 3 || this.ngBox.current.type === 4) {
                    this.ngBox.loading = false;
                }

                clearInterval(t);
            }
        }, 10);
    }

    closeNgBox() {
        this.ngBox.open = false;
    }

    elementExist() {
        if (this.elementView !== undefined) {
            return true;
        }
        return false;
    }

    @HostListener('window:resize', ['$event'])
    resize() {
        // Resize big images

        if ( this.elementView && this.elementButtons) {
            let currentWidth = this.calcPercent(this.ngBox.current.width, window.innerWidth);
            let currentHeight = this.calcPercent(this.ngBox.current.height, window.innerHeight);

            let realWidth   = this.elementView.nativeElement.naturalWidth ?
                              this.elementView.nativeElement.naturalWidth : currentWidth;
            let realHeight  = this.elementView.nativeElement.naturalHeight ?
                              this.elementView.nativeElement.naturalHeight : currentHeight;


            let maxWidth    = Math.min((window.innerWidth - 70), currentWidth ? currentWidth : realWidth);
            let maxHeight   = Math.min((window.innerHeight - 60), currentHeight ? currentHeight : realHeight);

            let ratio       = Math.min( maxWidth / realWidth, maxHeight / realHeight);

            this.elementView.nativeElement.width    = realWidth * ratio;
            this.elementView.nativeElement.height   = realHeight * ratio;


            this.elementButtons.nativeElement.style.width = this.elementView.nativeElement.offsetWidth + 'px';

            // Calculate top padding
            this.offsetHeight = (window.innerHeight - 40 - this.elementView.nativeElement.offsetHeight) / 2;
            if (this.offsetHeight < 0) {
                this.offsetHeight = 0;
            }
        }
    }




    @HostListener('window:keydown', ['$event'])
    checkKeyPress(event: KeyboardEvent) {
        if ( event.keyCode === 39 ) {
            this.nextNgBox();
        }else if ( event.keyCode === 37 ) {
            this.previousNgBox();
        }else if ( event.keyCode === 27 ) {
            this.closeNgBox();
        }
    }

    calcPercent(value, of) {
        if (value !== undefined && value.toString().search('%') >= 0) {
            return of * parseInt(value.toString(), 0) / 100;
        }
        return value;
    }

    getHasGroup() {
        return this.ngBox.current.group !== undefined;
    }

    getCount() {
        return this.ngBox.images.filter(image => image.group === this.ngBox.current.group).length;
    }

    getCurrentIndex() {
        let currentGroup = this.ngBox.images.filter(image => image.group === this.ngBox.current.group);
        return currentGroup.map(function (e) {
            return e.id;
        }).indexOf(this.ngBox.current.id) + 1;
    }

    nextNgBox() {
        if ( this.ngBox.current.group === undefined ) {
            return false;
        }
        this.ngBox.loading = true;
        let currentGroup = this.ngBox.images.filter(image => image.group === this.ngBox.current.group);
        let pos = currentGroup.map(function (e) {
            return e.id;
        }).indexOf(this.ngBox.current.id);
        if (pos >= currentGroup.length - 1) {
            this.ngBox.current = currentGroup[0];
        } else {
            this.ngBox.current = currentGroup[pos + 1];
        }
        this.checkInterval();
    }

    previousNgBox() {
        if ( this.ngBox.current.group === undefined ) {
            return false;
        }
        this.ngBox.loading = true;
        let currentGroup = this.ngBox.images.filter(image => image.group === this.ngBox.current.group);
        let pos = currentGroup.map(function (e) {
            return e.id;
        }).indexOf(this.ngBox.current.id);
        if (pos === 0) {
            pos = currentGroup.length;
        }
        this.ngBox.current = currentGroup[pos - 1];
        this.checkInterval();
    }

    isLoaded() {
        if (this.ngBox.current.type === 1) {
            this.ngBox.loading = false;
        }
        this.checkInterval();
    }

}
