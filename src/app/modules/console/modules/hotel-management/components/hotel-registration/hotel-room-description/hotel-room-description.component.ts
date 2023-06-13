import { Component, OnInit } from '@angular/core';
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";
import {FormControl, FormGroup, Validators,FormArray} from "@angular/forms";
import {Router} from "@angular/router";
import {RequestHotelListDTO, Room,Bed} from "../../../../../../share/dto/classes/hotel/RequestHotelListDTO";

interface RoomType {
  value: string;
  viewValue: string;
}
interface RoomName {
  value: string;
  viewValue: string;
}
interface BedType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-room-description',
  templateUrl: './hotel-room-description.component.html',
  styleUrls: ['./hotel-room-description.component.scss']
})
export class HotelRoomDescriptionComponent implements OnInit {

  roomInformation = new FormGroup({
    roomType:new FormControl(''),
    roomName:new FormControl(''),
    roomSize:new FormControl(''),
    customRoomName:new FormControl(''),
    noOfPeople:new FormControl(''),
    roomCountFromRoomType:new FormControl(''),
    smokingPolicy:new FormControl(''),
    beds:new FormArray([]),   //here we are creating a form array
    bedRoomCount:new FormControl(''),
    livingRoomCount:new FormControl(''),
    bathRoomCount:new FormControl(''),
    pricePerNight:new FormControl(''),
  });

  get bedForms() {
    return this.roomInformation.get('beds') as FormArray;
  }

  addBedInformation() {
    const beds = new FormGroup({
      bedType:new FormControl(''),
      bedCount:new FormControl('')
    });
    this.bedForms.push(beds);
  }

  deleteBedInformation(index: number) {
    this.bedForms.removeAt(index);
  }
  constructor(private router:Router, private hotelListingService: HotelListingService) {
  }

  addRoomInformation(){
    let roomDTO: Room = new Room(
      this.roomInformation.get('roomType')?.value!,
      this.roomInformation.get('roomName')?.value!,
      this.roomInformation.get('roomSize')?.value!,
      this.roomInformation.get('customRoomName')?.value!,
      this.roomInformation.get('noOfPeople')?.value!,
      this.roomInformation.get('roomCountFromRoomType')?.value!,
      this.roomInformation.get('smokingPolicy')?.value!,
      this.roomInformation.get('bedRoomCount')?.value!,
      this.roomInformation.get('livingRoomCount')?.value!,
      this.roomInformation.get('bathRoomCount')?.value!,
      this.roomInformation.get('pricePerNight')?.value!,
    )
    roomDTO.beds = this.bedForms.value;
    this.hotelListingService.addRoomToHotel(roomDTO);

    this.router.navigate(['/console/hotel-management/hotel-registration/hotel-room-count']).then();
  }

  roomTypes: RoomType[] = [
    {value: 'single', viewValue: 'Single'},
    {value: 'double', viewValue: 'Double'},
    {value: 'twinDouble', viewValue: 'Twin/Double'},
    {value: 'triple', viewValue: 'Triple'},
    {value: 'quad', viewValue: 'Quad'},
    {value: 'family', viewValue: 'Family'},
    {value: 'suite', viewValue: 'Suite'},
    {value: 'studio', viewValue: 'Studio'},
    {value: 'apartment', viewValue: 'Apartment'},
    {value: 'dormRoom', viewValue: 'Dorm Room'},
    {value: 'bedInDorm', viewValue: 'Bed in Dorm'},
  ];

  roomNames: RoomName[] = [
    {value: 'budgetDoubleRoom', viewValue: 'Budget Double Room'},
    {value: 'businessDoubleRoom', viewValue: 'Business Double Room with gym access'},
    {value: 'deluxeDoubleRoom', viewValue: 'Deluxe Double room'},
    {value: 'deluxeDouble-1adult/1child', viewValue: 'Deluxe Double room (1 adult + 1 child)'},
    {value: 'deluxeDouble-1adult/2children', viewValue: 'Deluxe Double room (1 adult + 2 children)'},
    {value: 'deluxeDouble-2adults/1child', viewValue: 'Deluxe Double room (2 adults + 1 child)'},
    {value: 'deluxeDoubleBalcony', viewValue: 'Deluxe Double room with balcony'},
    {value: 'deluxeDoubleBalconyAndSea', viewValue: 'Deluxe Double room with balcony and sea view'},
    {value: 'deluxeDoubleBath', viewValue: 'Deluxe Double room with bath'},
    {value: 'deluxeDoubleCastle', viewValue: 'Deluxe Double room with castle view'},
    {value: 'deluxeDoubleExtraBed', viewValue: 'Deluxe Double room with extra bed'},
    {value: 'deluxeDoubleSea', viewValue: 'Deluxe Double room with sea view'},
    {value: 'deluxeDoubleShower', viewValue: 'Deluxe Double room with shower'},
    {value: 'deluxeDoubleSideSeaView', viewValue: 'Deluxe Double room with side sea view'},
  ];

  bedTypes: BedType[] = [
    {value: 'twinBed', viewValue: 'Twin Bed(s) / 90-130cm wide'},
    {value:'fullBed', viewValue:'Full Bed(s) / 131-150cm wide'},
    {value:'queenBed', viewValue:'Queen Bed(s) / 151-180cm wide'},
    {value:'kingBed', viewValue:'King Bed(s) / 181-210cm wide'},
    {value:'bunkBed', viewValue:'Bunk Bed(s) / Variable size'},
    {value:'sofaBed', viewValue:'Sofa Bed(s) / Variable size'},
    {value:'futonBed', viewValue:'Futon Bed(s) / Variable size'},
  ];
  ngOnInit(): void {
  }
}

