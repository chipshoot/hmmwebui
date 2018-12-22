import { Component, Input, Output, EventEmitter} from "@angular/core"

@Component({
    selector : 'gasLogThumbnail',
    template : `<div>
    <div>Id : {{gaslog.id}}</div>
    <div>Log Date : {{gaslog.createDate}} </div>
    <div>Distance : {{gaslog.distance}}km </div>
    <div>Gas : {{gaslog.gas}}lt </div> 
    <div>Price : \${{gaslog.price}}\\lt </div>
    <div>Total : \${{gaslog.price * gaslog.gas}} </div>
    <div>Last Modify Date : {{gaslog.lastModifyDate}} </div>
    <button class="btn btn-second" (click)="editGasLog()">Edit</button>
    </div>`
})
export class GasLogThumbnailComponent{
    @Input() gaslog : any
    @Output() eventClick = new EventEmitter()

    editGasLog(){
        this.eventClick.emit(this.gaslog.id)
    }
}