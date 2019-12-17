import { GEO } from './geo'
import { from } from 'rxjs';
import { ENGINE_METHOD_CIPHERS } from 'constants';

export class Address {

    private street: string;
    private suite: string;
    private city: string;
    private zipCode: string;
    private geo: GEO;

    public constructor(_street: string, _suite: string, _city: string, _zipCode: string, _geo: GEO) {
        this.street = _street;
        this.suite = _suite;
        this.city = _city;
        this.zipCode = _zipCode;
        this.geo = _geo;
    }

    public getStreet(): string {
        return this.street;
    }

    public setStreet(_street: string): void {
        this.street = _street;
    }

    public getSuite(): string {
        return this.suite;
    }

    public setSuite(_suite: string): void {
        this.suite = _suite;
    }

    public getCity(): string {
        return this.city;
    }

    public setName(_city: string): void {
        this.city = _city;
    }

    public getZipCode(): string {
        return this.zipCode;
    }

    public setZipCode(_zipCode: string): void {
        this.zipCode = _zipCode;
    }

    public getGeo(): GEO {
        return this.geo;
    }

    public setGeo(_geo: GEO): void {
        this.geo = _geo;
    }
}