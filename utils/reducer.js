import moment from "moment"

const initialState = {
  counter: 0,
  showLoginModel: false,
  totalVehicleData: [
    {
        "_id": "66a14d5a8ae991f8a4ffbcae",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T18:52:10.697Z",
        "updatedAt": "2024-08-30T06:53:34.059Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test1sss6",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "12:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "12:30 PM"
        },
        "bookingAmount": "0",
        "contact": "9898989898"
    },
    {
        "_id": "66a14e408ae991f8a4ffbcb4",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T18:56:00.582Z",
        "updatedAt": "2024-08-30T07:33:25.261Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 1234",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "01:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "12:30 PM"
        },
        "bookingAmount": "0",
        "contact": "9898989898"
    },
    {
        "_id": "66a14e698ae991f8a4ffbcb8",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T18:56:41.540Z",
        "updatedAt": "2024-08-30T08:11:55.387Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 5678",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "02:00 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "02:00 PM"
        },
        "bookingAmount": "449",
        "contact": "9898989898"
    },
    {
        "_id": "66a14e738ae991f8a4ffbcbc",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T18:56:51.121Z",
        "updatedAt": "2024-07-27T18:53:39.431Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 9101",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "07/29/2024",
            "endTime": "10:00 AM"
        },
        "BookingStartDateAndTime": {
            "startDate": "07/28/2024",
            "startTime": "12:30 AM"
        }
    },
    {
        "_id": "66a14fa88ae991f8a4ffbcc2",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:02:00.086Z",
        "updatedAt": "2024-08-30T07:09:26.793Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 2323",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "09/06/2024",
            "endTime": "02:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/31/2024",
            "startTime": "01:00 PM"
        },
        "bookingAmount": "2854",
        "contact": "9898989898"
    },
    {
        "_id": "66a14fd08ae991f8a4ffbcc6",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:02:40.961Z",
        "updatedAt": "2024-08-30T08:32:59.958Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 9898",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "02:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "02:30 PM"
        },
        "bookingAmount": "401",
        "contact": "9898989898"
    },
    {
        "_id": "66a14fd68ae991f8a4ffbcca",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:02:46.801Z",
        "updatedAt": "2024-08-30T08:37:08.616Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 8787",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "02:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "02:30 PM"
        },
        "bookingAmount": "401",
        "contact": "9898989898"
    },
    {
        "_id": "66a14fdc8ae991f8a4ffbcce",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:02:52.449Z",
        "updatedAt": "2024-07-27T05:55:20.023Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 4567",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "07/28/2024",
            "endTime": "10:00 AM"
        },
        "BookingStartDateAndTime": {
            "startDate": "07/27/2024",
            "startTime": "11:30 AM"
        }
    },
    {
        "_id": "66a150a78ae991f8a4ffbcd2",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:06:15.136Z",
        "updatedAt": "2024-07-24T19:06:15.136Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 9878",
        "isBooked": false,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara"
    },
    {
        "_id": "66a151108ae991f8a4ffbcd6",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:08:00.793Z",
        "updatedAt": "2024-07-24T19:08:00.793Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 11222",
        "isBooked": false,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara"
    },
    {
        "_id": "66a1511d8ae991f8a4ffbcda",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:08:13.163Z",
        "updatedAt": "2024-08-30T15:01:08.408Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 6780",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "08:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "08:30 PM"
        },
        "bookingAmount": "401",
        "contact": "9898989898"
    },
    {
        "_id": "66a151828ae991f8a4ffbce0",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-24T19:09:54.663Z",
        "updatedAt": "2024-08-24T12:43:15.850Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 5098",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara",
        "BookingEndDateAndTime": {
            "endDate": "08/25/2024",
            "endTime": "06:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/24/2024",
            "startTime": "06:30 PM"
        },
        "bookingAmount": "451",
        "contact": "8787878787"
    },
    {
        "_id": "66a151be8ae991f8a4ffbce4",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T19:10:54.369Z",
        "updatedAt": "2024-07-24T19:10:54.369Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 9800",
        "isBooked": false,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara"
    },
    {
        "_id": "66a151c88ae991f8a4ffbce8",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T19:11:04.524Z",
        "updatedAt": "2024-07-24T19:11:04.524Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 2.01",
        "isBooked": false,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara"
    },
    {
        "_id": "66a151d08ae991f8a4ffbcec",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T19:11:12.628Z",
        "updatedAt": "2024-07-24T19:11:12.628Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 2.6522",
        "isBooked": false,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara"
    },
    {
        "_id": "66a151d68ae991f8a4ffbcf0",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T19:11:18.550Z",
        "updatedAt": "2024-08-24T12:26:35.733Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 46522",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "07:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/28/2024",
            "startTime": "06:30 PM"
        },
        "bookingAmount": "449",
        "contact": "8787878787"
    },
    {
        "_id": "66a167c6af423aaa9f31a916",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T20:44:54.899Z",
        "updatedAt": "2024-07-24T20:44:54.899Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 985654",
        "isBooked": false,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Mumbai",
        "pickupLocation": "Bandra"
    },
    {
        "_id": "66a167ceaf423aaa9f31a91a",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T20:45:02.205Z",
        "updatedAt": "2024-07-24T20:45:02.205Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 98852",
        "isBooked": false,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Mumbai",
        "pickupLocation": "Bandra"
    },
    {
        "_id": "66a167ffaf423aaa9f31a91e",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T20:45:51.724Z",
        "updatedAt": "2024-08-30T09:40:52.110Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 4125",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Banglore",
        "pickupLocation": "Indira Nagar",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "03:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "03:30 PM"
        },
        "bookingAmount": "449",
        "contact": "9898989898"
    },
    {
        "_id": "66a16806af423aaa9f31a922",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-24T20:45:58.634Z",
        "updatedAt": "2024-07-27T22:03:27.711Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 85569",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Banglore",
        "pickupLocation": "Indira Nagar",
        "BookingEndDateAndTime": {
            "endDate": "07/29/2024",
            "endTime": "10:00 AM"
        },
        "BookingStartDateAndTime": {
            "startDate": "07/28/2024",
            "startTime": "03:30 PM"
        }
    },
    {
        "_id": "66a210d57e827451caf742a2",
        "pricePerday": "312",
        "name": "Royal Enfield Classic 350 Signals Stormrider Sand",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/36bd2ad9-f3a5-421e-aa20-9eb8f3250760.jpg",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Royal Enfield",
        "createdAt": "2024-07-25T08:46:13.819Z",
        "updatedAt": "2024-07-27T21:58:59.653Z",
        "__v": 0,
        "bookingCount": 15,
        "vehicleNumber": "up84 test 5555",
        "isBooked": true,
        "vehicleId": "66a14d5a8ae991f8a4ffbcac",
        "location": "Banglore",
        "pickupLocation": "Indira Nagar",
        "BookingEndDateAndTime": {
            "endDate": "07/29/2024",
            "endTime": "10:00 AM"
        },
        "BookingStartDateAndTime": {
            "startDate": "07/28/2024",
            "startTime": "03:30 PM"
        }
    },
    {
        "_id": "66a21a857e827451caf7434d",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T09:27:33.516Z",
        "updatedAt": "2024-08-23T07:27:46.430Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 1111",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Banglore",
        "pickupLocation": "Church Street",
        "BookingEndDateAndTime": {
            "endDate": "08/24/2024",
            "endTime": "01:00 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/23/2024",
            "startTime": "01:00 PM"
        },
        "bookingAmount": "451",
        "contact": "9898989898"
    },
    {
        "_id": "66a21aea7e827451caf7436c",
        "pricePerday": "313",
        "name": "HONDA XBLADE",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1678373257261-000000-HONDA-XBLADE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T09:29:14.197Z",
        "updatedAt": "2024-07-27T19:10:15.408Z",
        "__v": 0,
        "bookingCount": 11,
        "vehicleNumber": "up84 test 2222",
        "isBooked": true,
        "vehicleId": "66a14fa78ae991f8a4ffbcc0",
        "location": "Banglore",
        "pickupLocation": "Church Street",
        "BookingEndDateAndTime": {
            "endDate": "07/29/2024",
            "endTime": "10:00 AM"
        },
        "BookingStartDateAndTime": {
            "startDate": "07/28/2024",
            "startTime": "01:00 AM"
        }
    },
    {
        "_id": "66a287c90bda8595f0bdff08",
        "pricePerday": "314",
        "name": "Honda Dio BS6",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/43a96120-3e8b-4ec1-8ec1-445d9217f07e.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:13:45.244Z",
        "updatedAt": "2024-07-28T10:47:49.595Z",
        "__v": 0,
        "bookingCount": 2,
        "vehicleNumber": "up84 test 946516",
        "isBooked": true,
        "vehicleId": "66a287c90bda8595f0bdff06",
        "location": "Banglore",
        "pickupLocation": "Church Street",
        "BookingEndDateAndTime": {
            "endDate": "07/29/2024",
            "endTime": "10:00 AM"
        },
        "BookingStartDateAndTime": {
            "startDate": "07/28/2024",
            "startTime": "04:30 PM"
        }
    },
    {
        "_id": "66a288650bda8595f0bdff0c",
        "pricePerday": "314",
        "name": "Honda Dio BS6",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/43a96120-3e8b-4ec1-8ec1-445d9217f07e.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:16:21.958Z",
        "updatedAt": "2024-08-18T10:22:10.898Z",
        "__v": 0,
        "bookingCount": 2,
        "vehicleNumber": "up84 test 4949s",
        "isBooked": true,
        "vehicleId": "66a287c90bda8595f0bdff06",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "08/19/2024",
            "endTime": "07:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/18/2024",
            "startTime": "04:30 PM"
        }
    },
    {
        "_id": "66a2888e0bda8595f0bdff10",
        "pricePerday": "314",
        "name": "Honda Dio BS6",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/43a96120-3e8b-4ec1-8ec1-445d9217f07e.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:17:02.178Z",
        "updatedAt": "2024-07-25T17:17:02.178Z",
        "__v": 0,
        "bookingCount": 2,
        "vehicleNumber": "up84 test 6546asd",
        "isBooked": false,
        "vehicleId": "66a287c90bda8595f0bdff06",
        "location": "Banglore",
        "pickupLocation": "Indira Nagar"
    },
    {
        "_id": "66a288b10bda8595f0bdff14",
        "pricePerday": "314",
        "name": "Honda Dio BS6",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/43a96120-3e8b-4ec1-8ec1-445d9217f07e.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:17:37.433Z",
        "updatedAt": "2024-07-25T17:17:37.433Z",
        "__v": 0,
        "bookingCount": 2,
        "vehicleNumber": "up84 test 5464asas",
        "isBooked": false,
        "vehicleId": "66a287c90bda8595f0bdff06",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara"
    },
    {
        "_id": "66a288d70bda8595f0bdff18",
        "pricePerday": "314",
        "name": "Honda Dio BS6",
        "url": "https://gobikes-prod-public.s3.ap-south-1.amazonaws.com/uploads/admin/bike/43a96120-3e8b-4ec1-8ec1-445d9217f07e.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:18:15.170Z",
        "updatedAt": "2024-08-12T16:20:10.561Z",
        "__v": 0,
        "bookingCount": 2,
        "vehicleNumber": "up84 test 6645sasd",
        "isBooked": true,
        "vehicleId": "66a287c90bda8595f0bdff06",
        "location": "Mumbai",
        "pickupLocation": "Bandra",
        "BookingEndDateAndTime": {
            "endDate": "08/13/2024",
            "endTime": "10:00 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/12/2024",
            "startTime": "10:00 PM"
        }
    },
    {
        "_id": "66a2892a0bda8595f0bdff1e",
        "pricePerday": "317",
        "name": "Honda Activa 6G",
        "url": "https://api.gobikes.co.in/uploads/bike/Honda-Activa-5g.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:19:38.812Z",
        "updatedAt": "2024-07-25T17:19:38.812Z",
        "__v": 0,
        "bookingCount": 3,
        "vehicleNumber": "up84 test 4654bgb",
        "isBooked": false,
        "vehicleId": "66a2892a0bda8595f0bdff1c",
        "location": "Mumbai",
        "pickupLocation": "Bandra"
    },
    {
        "_id": "66a2894c0bda8595f0bdff22",
        "pricePerday": "317",
        "name": "Honda Activa 6G",
        "url": "https://api.gobikes.co.in/uploads/bike/Honda-Activa-5g.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:20:12.736Z",
        "updatedAt": "2024-07-25T17:20:12.736Z",
        "__v": 0,
        "bookingCount": 3,
        "vehicleNumber": "up84 test 8526sdf",
        "isBooked": false,
        "vehicleId": "66a2892a0bda8595f0bdff1c",
        "location": "Mumbai",
        "pickupLocation": "Nala Sopara"
    },
    {
        "_id": "66a2896a0bda8595f0bdff26",
        "pricePerday": "317",
        "name": "Honda Activa 6G",
        "url": "https://api.gobikes.co.in/uploads/bike/Honda-Activa-5g.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:20:42.831Z",
        "updatedAt": "2024-08-30T16:53:03.909Z",
        "__v": 0,
        "bookingCount": 3,
        "vehicleNumber": "up84 test 64544ds",
        "isBooked": true,
        "vehicleId": "66a2892a0bda8595f0bdff1c",
        "location": "Banglore",
        "pickupLocation": "Koramangla",
        "BookingEndDateAndTime": {
            "endDate": "08/31/2024",
            "endTime": "10:30 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/30/2024",
            "startTime": "10:30 PM"
        },
        "contact": "9916864268",
        "bookingAmount": "456"
    },
    {
        "_id": "66a289800bda8595f0bdff2a",
        "pricePerday": "317",
        "name": "Honda Activa 6G",
        "url": "https://api.gobikes.co.in/uploads/bike/Honda-Activa-5g.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:21:04.735Z",
        "updatedAt": "2024-07-27T05:57:28.829Z",
        "__v": 0,
        "bookingCount": 3,
        "vehicleNumber": "up84 test 894654sa",
        "isBooked": true,
        "vehicleId": "66a2892a0bda8595f0bdff1c",
        "location": "Banglore",
        "pickupLocation": "Church Street",
        "BookingEndDateAndTime": {
            "endDate": "07/28/2024",
            "endTime": "10:00 AM"
        },
        "BookingStartDateAndTime": {
            "startDate": "07/27/2024",
            "startTime": "11:30 AM"
        }
    },
    {
        "_id": "66a289910bda8595f0bdff2e",
        "pricePerday": "317",
        "name": "Honda Activa 6G",
        "url": "https://api.gobikes.co.in/uploads/bike/Honda-Activa-5g.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "non gear",
        "brand": "Honda",
        "createdAt": "2024-07-25T17:21:21.699Z",
        "updatedAt": "2024-08-29T13:17:01.301Z",
        "__v": 0,
        "bookingCount": 3,
        "vehicleNumber": "up84 test 65456dss",
        "isBooked": true,
        "vehicleId": "66a2892a0bda8595f0bdff1c",
        "location": "Banglore",
        "pickupLocation": "Indira Nagar",
        "BookingEndDateAndTime": {
            "endDate": "08/30/2024",
            "endTime": "07:00 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/29/2024",
            "startTime": "07:00 PM"
        },
        "bookingAmount": "456",
        "contact": "9898989898"
    },
    {
        "_id": "66cb28c73dee226cc2ae58c6",
        "bookingCount": 1,
        "pricePerday": "311",
        "name": "HERO XPULSE 200 4V BS6",
        "url": "https://rentelo-production.s3.ap-south-1.amazonaws.com/models/1709823352369-000000-RENT-HERO-X-PULSE-BS6-IN-BANGALORE-RENTELO.png",
        "distanceLimit": "100",
        "accessChargePerKm": "3",
        "transmissionType": "gear",
        "brand": "Honda",
        "createdAt": "2024-08-25T12:51:24.985Z",
        "updatedAt": "2024-08-25T12:53:10.986Z",
        "__v": 0,
        "vehicleNumber": "up99 test 65456dss",
        "bookingAmount": "448",
        "isBooked": true,
        "vehicleId": "66cb28c33dee226cc2ae58c4",
        "location": "Banglore",
        "pickupLocation": "Akshay Nagar",
        "BookingEndDateAndTime": {
            "endDate": "08/26/2024",
            "endTime": "05:00 PM"
        },
        "BookingStartDateAndTime": {
            "startDate": "08/25/2024",
            "startTime": "07:00 PM"
        },
        "contact": "9898989898"
    }
],
  customVehicleData: [],
  otpModel: false,
  loading: false,
  error: "",
  mobile: "",
  citiesModal: false,
  startDate: "",
  startTime: "",
  selectedVehicle: "",
  filterData: "",
  //endTime: { hours: 10, minutes: 0 },
  endTime: "",
  vehicleData: "",
  citiesData: "",
  endDate: "",
  selectedLocality: "",
  disabledKeys: "",
  soldOut: false,
  showSignUpModel: false,
  loginData: "",
  isLoggedIn: false,
  paymentMethod: "",
  userDetails: { userType: "USER" },
  showPayModel: false,
  triggerApi: false,
  filterString: {},
  defaultBrand: "Please choose brand",
  defaultPrice: "Please sort type",
  vehicleName: "",
  selectedCity: "",
  selectedKeys: "",
  defaultPickupLocation: "Please select the nearby location"
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {    
    case 'PAYMENTMETHOD':
      return { ...state, paymentMethod: action.payload };
      case 'SELECTEDKEYS':
      return { ...state, selectedKeys: action.payload };
      case 'SHOWSIGNUPMODAL':
      return { ...state, showSignUpModel: action.payload };
    case 'DEFAULTBRAND':
      return { ...state, defaultBrand: action.payload };
    case 'DEFAULTPRICE':
      return { ...state, defaultPrice: action.payload };
    case 'DEFAULTPICKUPLOCATION':
      return { ...state, defaultPickupLocation: action.payload };
    case 'TRIGGERAPI':
      return { ...state, triggerApi: action.payload };
    case 'DISABLEDKEYS':
      return { ...state, disabledKeys: action.payload };
    case 'SHOWLOGINMODEL':
      return { ...state, showLoginModel: action.payload };
    case 'USERDETAILS':
      return { ...state, userDetails: action.payload };
    case 'SOLDOUT':
      return { ...state, soldOut: action.payload };
    case 'OTPMODEL':
      return { ...state, otpModel: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload };
    case 'MOBILE':
      return { ...state, mobile: action.payload };
    case 'SELECTEDCITY':
      return { ...state, selectedCity: action.payload };
    case 'CITIESTMODAL':
      return { ...state, citiesModal: action.payload };
    case 'STARTDATE':
      return { ...state, startDate: action.payload };
    case 'ENDTIME':
      return { ...state, endTime: action.payload };
    case 'STARTTIME':
      return { ...state, startTime: action.payload };
      case 'SHOWPAYMODEL':
      return { ...state, showPayModel: action.payload };
    case 'ENDDATE':      
      return { ...state, endDate: action.payload };
    case 'VEHICLADATA':
      return { ...state, vehicleData: action.payload };
    case 'SELECTEDVEHICLE':
      return { ...state, selectedVehicle: action.payload };
    case 'CITIESDATA':
      return { ...state, citiesData: action.payload };
    case 'FILTERSTRING':
      return { ...state, filterString: action.payload };
    case 'SELECTEDLOCALITY':
      return { ...state, selectedLocality: action.payload };
    case 'FILTERDATA':
      return { ...state, filterData: action.payload };
    case 'LOADING':
      return { ...state, loading: action.payload };
    case 'VEHICLENAME':
      return { ...state, vehicleName: action.payload };
    case 'LOGINDATA':
      return { ...state, loginData: action.payload };
    case 'ISLOGGEDIN':
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
};

export default RootReducer