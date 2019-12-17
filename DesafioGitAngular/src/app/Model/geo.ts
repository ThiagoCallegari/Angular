export class GEO {

    private lat: string;
    private lng: string;

    public constructor (_lat: string, _lng: string) {
        this.lat = _lat;
        this.lng = _lng;
    }

    public getLat(): string {
        return this.lat;
    }

    public setLat(_lat: string): void {
        this.lat = _lat;
    }

    public getLng(): string {
        return this.lng;
    }

    public setLng(_lng: string): void {
        this.lng = _lng;
    }    
}