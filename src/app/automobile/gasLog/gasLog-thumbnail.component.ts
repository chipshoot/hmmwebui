import { Component } from "@angular/core"

@Component({
    selector : 'gasLogThumbnail',
    template : '{{htmlstring}}'
})
export class GasLogThumbnailComponent{
    //gaslog : any

    gaslog = {
        id  : 1,
        distance : 400,
        gas : 41.5,
        price : 0.98,
        discounts : [],
        gasStation : 'Costco',
        createDate: '2018-11-15',
        lastModifyDate : '2008-11-15'
    }

    htmlstring = '<div> <div>Log Date : gaslog.createDate <div>Distance : gaslog.distance km </div> <div>Gas : gaslog.gas lt </div> <div>Price : \$ gaslog.price\\lt </div> <div>Total : \$ gaslog.price </div></div>'
    
}