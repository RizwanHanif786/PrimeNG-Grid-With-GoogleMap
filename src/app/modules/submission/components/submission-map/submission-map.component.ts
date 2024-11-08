import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ISubmissions } from '../../models/submissions.model';
import { SubmissionService } from '../../service/submission.service';
declare var google: any;

@Component({
    selector: 'app-submission-map',
    templateUrl: './submission-map.component.html',
    styleUrls: ['./submission-map.component.scss']
})
export class SubmissionMapComponent implements OnInit {
    @Input() submissionData: ISubmissions[] = [];

    public options: any;
    public overlays: any[] = [];
    public dialogVisible: boolean = false;
    public markerTitle: string | null = '';
    public selectedPosition: any;
    public infoWindow: any;
    public draggable: boolean = false;

    constructor(private messageService: MessageService, public submissionService: SubmissionService) { }

    ngOnInit() {
        this.options = {
            center: { lat: 36.890257, lng: 30.707417 },
            zoom: 12
        };
        this.initOverlays();
        this.infoWindow = new google.maps.InfoWindow();
    }

    handleMapClick(event: any) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }

    /**
     * handles overlay clicking.
     * @param event 
     */
    handleOverlayClick(event: any) {
        console.log('event: ', event);
        let isMarker = event.overlay.getTitle != undefined;

        if (isMarker) {
                       let title = event.overlay.getTitle();
            this.infoWindow.setContent('' + title + '');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition())

            this.messageService.add({ severity: 'info', summary: 'Marker Selected', detail: title });
        }
        else {
            this.messageService.add({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    }

    /**
     * adds marker on map.
     */
    addMarker() {
        this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() }, title: this.markerTitle, draggable: this.draggable }));
        this.markerTitle = null;
        this.dialogVisible = false;
    }

    /**
     * emits when dragging map ends.
     * @param event 
     */
    handleDragEnd(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    }

    /**
     * sets default overlays on map.
     */
    initOverlays() {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
                new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),
                new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: "Oldtown" }),
                new google.maps.Polygon({
                    paths: [
                        { lat: 36.9177, lng: 30.7854 }, { lat: 36.8851, lng: 30.7802 }, { lat: 36.8829, lng: 30.8111 }, { lat: 36.9177, lng: 30.8159 }
                    ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
                new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
            ];
        }
    }
}

