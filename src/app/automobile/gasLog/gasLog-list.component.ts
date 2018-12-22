import { Component } from "@angular/core"

@Component({
    selector : 'gaslog-list',
    template : `
    <div class="row">
    <ul>
    <li *ngFor="let gaslog of gaslogs"> <gasLogThumbnail (eventClick)="editGasLog($event)" [gaslog]="gaslog"></gasLogThumbnail></li>
    </ul>
    </div>`
})
export class GasLogListComponent{
    gaslogs = [
        {
        id  : 1,
        distance : 400,
        gas : 41.5,
        price : 0.98,
        discounts : [],
        gasStation : 'Costco',
        createDate: '2018-11-15',
        lastModifyDate : '2008-11-15'
        },

        {
        id  : 2,
        distance : 450,
        gas : 49.5,
        price : 1.08,
        discounts : [],
        gasStation : 'Costco',
        createDate: '2018-11-21',
        lastModifyDate : '2008-11-21'
        },
        {
        id  : 3,
        distance : 550,
        gas : 60.75,
        price : 1.08,
        discounts : [],
        gasStation : 'Patral Canata',
        createDate: '2018-12-1',
        lastModifyDate : '2008-12-1'
        }
    ]

    editGasLog(gaslog){
        console.log('gas log editor', gaslog)
    }
}