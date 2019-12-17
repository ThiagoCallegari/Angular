import { Address } from './address';
import { Company } from './company';
import { from } from 'rxjs';

export class User {

    private id: number;
    private name: string;
    private userName: string;
    private email: string;
    private address: Address;
    private phone: string;
    private website: string;
    private company: Company;

    public constructor (_id: number, _name: string, _userName: string, _email: string, _address: Address, _phone: string, _website: string, _company: Company) {

        this.id = _id;
        this.name = _name;
        this.userName = _userName;
        this.email = _email;
        this.address = _address;
        this.phone = _phone;
        this.website = _website;
        this.company = _company;
    }

    public getId(): number {
        return this.id;
    }

    public setId(_id: number): void {
        this.id = _id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(_name: string): void {
        this.name = _name;
    }

    public getUserName(): string {
        return this.userName;
    }

    public setUserName(_userName: string): void {
        this.name = _userName;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(_email: string): void {
        this.email = _email;
    }

    public getAddress(): Address {
        return this.address;
    }

    public setAddress(_address: Address): void {
        this.address = _address;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(_phone: string): void {
        this.phone = _phone;
    }

    public getWebsite(): string {
        return this.website;
    }

    public setWebsite(_website: string): void {
        this.website = _website;
    }

    public getCompany(): Company {
        return this.company;
    }

    public setCompany(_company: Company): void {
        this.company = _company;
    }
}