export const MockSearchRoundTrip = {
    "data": {
        "context": {
            "status": "incomplete",
            "sessionId": "ClQIARJQCk4KJGMwNzgxYTNjLTI5ZDMtNDAzOS04ODM3LThmNjY2MDA1ZTY0NBACGiQ0YTMyMTkwNC0zYjJlLTRjNjAtOGQwOC1lNTI1Zjc3OGJmMmISKHVzc18zNTRlMGQ4MC1mNmZiLTQxZDYtODFkOS05NWQ5YzBiZmQxYmY=",
            "totalResults": 10
        },
        "itineraries": [
            {
                "id": "10413-2408311410--32480-1-14355-2408311955|14355-2409072205--32480-1-10413-2409081740",
                "price": {
                    "raw": 1351.03,
                    "formatted": "$1,352",
                    "pricingOptionId": "oPoee9YDG5oa"
                },
                "legs": [
                    {
                        "id": "10413-2408311410--32480-1-14355-2408311955",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 765,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T14:10:00",
                        "arrival": "2024-08-31T19:55:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operationType": "fully_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-13554-2408311410-2408311425--32480",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "departure": "2024-08-31T14:10:00",
                                "arrival": "2024-08-31T14:25:00",
                                "durationInMinutes": 75,
                                "flightNumber": "315",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "13554-14355-2408311605-2408311955--32480",
                                "origin": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T16:05:00",
                                "arrival": "2024-08-31T19:55:00",
                                "durationInMinutes": 590,
                                "flightNumber": "225",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409072205--32480-1-10413-2409081740",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 755,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T22:05:00",
                        "arrival": "2024-09-08T17:40:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operationType": "fully_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-13554-2409072205-2409081250--32480",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "departure": "2024-09-07T22:05:00",
                                "arrival": "2024-09-08T12:50:00",
                                "durationInMinutes": 525,
                                "flightNumber": "224",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "13554-10413-2409081520-2409081740--32480",
                                "origin": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-08T15:20:00",
                                "arrival": "2024-09-08T17:40:00",
                                "durationInMinutes": 80,
                                "flightNumber": "316",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "eco": {
                    "ecoContenderDelta": 9.255659
                },
                "fareAttributes": {},
                "tags": [
                    "shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.999
            },
            {
                "id": "10413-2408311125--32480-1-14355-2408311807|14355-2409072205--32480-1-10413-2409081740",
                "price": {
                    "raw": 1362.6,
                    "formatted": "$1,363",
                    "pricingOptionId": "ShkHZGTwQKVP"
                },
                "legs": [
                    {
                        "id": "10413-2408311125--32480-1-14355-2408311807",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 822,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T11:25:00",
                        "arrival": "2024-08-31T18:07:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -32573,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                                    "name": "American Airlines"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-10968-2408311125-2408311450--32480",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T11:25:00",
                                "arrival": "2024-08-31T14:50:00",
                                "durationInMinutes": 625,
                                "flightNumber": "1537",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "10968-14355-2408311637-2408311807--32480",
                                "origin": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T16:37:00",
                                "arrival": "2024-08-31T18:07:00",
                                "durationInMinutes": 90,
                                "flightNumber": "2414",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409072205--32480-1-10413-2409081740",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 755,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T22:05:00",
                        "arrival": "2024-09-08T17:40:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operationType": "fully_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-13554-2409072205-2409081250--32480",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "departure": "2024-09-07T22:05:00",
                                "arrival": "2024-09-08T12:50:00",
                                "durationInMinutes": 525,
                                "flightNumber": "224",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "13554-10413-2409081520-2409081740--32480",
                                "origin": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-08T15:20:00",
                                "arrival": "2024-09-08T17:40:00",
                                "durationInMinutes": 80,
                                "flightNumber": "316",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "tags": [
                    "second_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.944948
            },
            {
                "id": "10413-2408311030--32480-1-14355-2408311753|14355-2409072205--32480-1-10413-2409081740",
                "price": {
                    "raw": 1362.6,
                    "formatted": "$1,363",
                    "pricingOptionId": "zpQ20WKtNqp6"
                },
                "legs": [
                    {
                        "id": "10413-2408311030--32480-1-14355-2408311753",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 863,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T10:30:00",
                        "arrival": "2024-08-31T17:53:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -32573,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                                    "name": "American Airlines"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-10602-2408311030-2408311345--32480",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "CLT",
                                    "displayCode": "CLT",
                                    "parent": {
                                        "flightPlaceId": "CLTA",
                                        "displayCode": "CLT",
                                        "name": "Charlotte",
                                        "type": "City"
                                    },
                                    "name": "Charlotte Douglas",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T10:30:00",
                                "arrival": "2024-08-31T13:45:00",
                                "durationInMinutes": 555,
                                "flightNumber": "1503",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "10602-14355-2408311647-2408311753--32480",
                                "origin": {
                                    "flightPlaceId": "CLT",
                                    "displayCode": "CLT",
                                    "parent": {
                                        "flightPlaceId": "CLTA",
                                        "displayCode": "CLT",
                                        "name": "Charlotte",
                                        "type": "City"
                                    },
                                    "name": "Charlotte Douglas",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T16:47:00",
                                "arrival": "2024-08-31T17:53:00",
                                "durationInMinutes": 126,
                                "flightNumber": "1789",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409072205--32480-1-10413-2409081740",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 755,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T22:05:00",
                        "arrival": "2024-09-08T17:40:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operationType": "fully_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-13554-2409072205-2409081250--32480",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "departure": "2024-09-07T22:05:00",
                                "arrival": "2024-09-08T12:50:00",
                                "durationInMinutes": 525,
                                "flightNumber": "224",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "13554-10413-2409081520-2409081740--32480",
                                "origin": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-08T15:20:00",
                                "arrival": "2024-09-08T17:40:00",
                                "durationInMinutes": 80,
                                "flightNumber": "316",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.891039
            },
            {
                "id": "10413-2408311225--32478-1-14355-2408312029|14355-2409071230--32478-1-10413-2409080705",
                "price": {
                    "raw": 1297.05,
                    "formatted": "$1,298",
                    "pricingOptionId": "CDheEQTSgF5D"
                },
                "legs": [
                    {
                        "id": "10413-2408311225--32478-1-14355-2408312029",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 904,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T12:25:00",
                        "arrival": "2024-08-31T20:29:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32478,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/SN.png",
                                    "name": "Brussels Airlines"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-12387-2408311225-2408311450--32478",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T12:25:00",
                                "arrival": "2024-08-31T14:50:00",
                                "durationInMinutes": 505,
                                "flightNumber": "8926",
                                "marketingCarrier": {
                                    "id": -32478,
                                    "name": "Brussels Airlines",
                                    "alternateId": "SN",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "12387-14355-2408311851-2408312029--32478",
                                "origin": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T18:51:00",
                                "arrival": "2024-08-31T20:29:00",
                                "durationInMinutes": 158,
                                "flightNumber": "8991",
                                "marketingCarrier": {
                                    "id": -32478,
                                    "name": "Brussels Airlines",
                                    "alternateId": "SN",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409071230--32478-1-10413-2409080705",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 695,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T12:30:00",
                        "arrival": "2024-09-08T07:05:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32478,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/SN.png",
                                    "name": "Brussels Airlines"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31528,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/%21%5C.png",
                                    "name": "Mesa Airlines DBA United Express"
                                },
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-12387-2409071230-2409071609--32478",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-09-07T12:30:00",
                                "arrival": "2024-09-07T16:09:00",
                                "durationInMinutes": 159,
                                "flightNumber": "8993",
                                "marketingCarrier": {
                                    "id": -32478,
                                    "name": "Brussels Airlines",
                                    "alternateId": "SN",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31528,
                                    "name": "Mesa Airlines DBA United Express",
                                    "alternateId": "!\\",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "12387-10413-2409071730-2409080705--32478",
                                "origin": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-07T17:30:00",
                                "arrival": "2024-09-08T07:05:00",
                                "durationInMinutes": 455,
                                "flightNumber": "8925",
                                "marketingCarrier": {
                                    "id": -32478,
                                    "name": "Brussels Airlines",
                                    "alternateId": "SN",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "tags": [
                    "second_cheapest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.888828
            },
            {
                "id": "10413-2408311410--32480-1-14355-2408311955|14355-2409071346--32480-1-10413-2409081030",
                "price": {
                    "raw": 1358.13,
                    "formatted": "$1,359",
                    "pricingOptionId": "rqbTrrG_bGsx"
                },
                "legs": [
                    {
                        "id": "10413-2408311410--32480-1-14355-2408311955",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 765,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T14:10:00",
                        "arrival": "2024-08-31T19:55:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operationType": "fully_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-13554-2408311410-2408311425--32480",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "departure": "2024-08-31T14:10:00",
                                "arrival": "2024-08-31T14:25:00",
                                "durationInMinutes": 75,
                                "flightNumber": "315",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "13554-14355-2408311605-2408311955--32480",
                                "origin": {
                                    "flightPlaceId": "LHR",
                                    "displayCode": "LHR",
                                    "parent": {
                                        "flightPlaceId": "LOND",
                                        "displayCode": "LON",
                                        "name": "London",
                                        "type": "City"
                                    },
                                    "name": "London Heathrow",
                                    "type": "Airport",
                                    "country": "United Kingdom"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T16:05:00",
                                "arrival": "2024-08-31T19:55:00",
                                "durationInMinutes": 590,
                                "flightNumber": "225",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409071346--32480-1-10413-2409081030",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 824,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T13:46:00",
                        "arrival": "2024-09-08T10:30:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -32573,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                                    "name": "American Airlines"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-10968-2409071346-2409071532--32480",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-09-07T13:46:00",
                                "arrival": "2024-09-07T15:32:00",
                                "durationInMinutes": 106,
                                "flightNumber": "5071",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "10968-10413-2409071800-2409081030--32480",
                                "origin": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-07T18:00:00",
                                "arrival": "2024-09-08T10:30:00",
                                "durationInMinutes": 570,
                                "flightNumber": "1536",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "tags": [
                    "third_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.884937
            },
            {
                "id": "10413-2408311225--32090-1-14355-2408312029|14355-2409071230--32090-1-10413-2409080705",
                "price": {
                    "raw": 1297.05,
                    "formatted": "$1,298",
                    "pricingOptionId": "I4Rj2W2yV4Vd"
                },
                "legs": [
                    {
                        "id": "10413-2408311225--32090-1-14355-2408312029",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 904,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T12:25:00",
                        "arrival": "2024-08-31T20:29:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32090,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
                                    "name": "Lufthansa"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-12387-2408311225-2408311450--32090",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T12:25:00",
                                "arrival": "2024-08-31T14:50:00",
                                "durationInMinutes": 505,
                                "flightNumber": "7641",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "12387-14355-2408311851-2408312029--32090",
                                "origin": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T18:51:00",
                                "arrival": "2024-08-31T20:29:00",
                                "durationInMinutes": 158,
                                "flightNumber": "8996",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409071230--32090-1-10413-2409080705",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 695,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T12:30:00",
                        "arrival": "2024-09-08T07:05:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32090,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
                                    "name": "Lufthansa"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31528,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/%21%5C.png",
                                    "name": "Mesa Airlines DBA United Express"
                                },
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-12387-2409071230-2409071609--32090",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-09-07T12:30:00",
                                "arrival": "2024-09-07T16:09:00",
                                "durationInMinutes": 159,
                                "flightNumber": "7555",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31528,
                                    "name": "Mesa Airlines DBA United Express",
                                    "alternateId": "!\\",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "12387-10413-2409071730-2409080705--32090",
                                "origin": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-07T17:30:00",
                                "arrival": "2024-09-08T07:05:00",
                                "durationInMinutes": 455,
                                "flightNumber": "7640",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "tags": [
                    "second_cheapest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.870306
            },
            {
                "id": "10413-2408311125--32480-1-14355-2408311807|14355-2409071346--32480-1-10413-2409081030",
                "price": {
                    "raw": 1369.69,
                    "formatted": "$1,370",
                    "pricingOptionId": "6zhW-O7Z9UX0"
                },
                "legs": [
                    {
                        "id": "10413-2408311125--32480-1-14355-2408311807",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 822,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T11:25:00",
                        "arrival": "2024-08-31T18:07:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -32573,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                                    "name": "American Airlines"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-10968-2408311125-2408311450--32480",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T11:25:00",
                                "arrival": "2024-08-31T14:50:00",
                                "durationInMinutes": 625,
                                "flightNumber": "1537",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "10968-14355-2408311637-2408311807--32480",
                                "origin": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T16:37:00",
                                "arrival": "2024-08-31T18:07:00",
                                "durationInMinutes": 90,
                                "flightNumber": "2414",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409071346--32480-1-10413-2409081030",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 824,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T13:46:00",
                        "arrival": "2024-09-08T10:30:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -32573,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                                    "name": "American Airlines"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-10968-2409071346-2409071532--32480",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-09-07T13:46:00",
                                "arrival": "2024-09-07T15:32:00",
                                "durationInMinutes": 106,
                                "flightNumber": "5071",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "10968-10413-2409071800-2409081030--32480",
                                "origin": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-07T18:00:00",
                                "arrival": "2024-09-08T10:30:00",
                                "durationInMinutes": 570,
                                "flightNumber": "1536",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.845047
            },
            {
                "id": "10413-2408310945--32090-1-14355-2408311819|14355-2409071230--32090-1-10413-2409080705",
                "price": {
                    "raw": 1297.05,
                    "formatted": "$1,298",
                    "pricingOptionId": "ZEcHyzynx1Xr"
                },
                "legs": [
                    {
                        "id": "10413-2408310945--32090-1-14355-2408311819",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 934,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T09:45:00",
                        "arrival": "2024-08-31T18:19:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32090,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
                                    "name": "Lufthansa"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-11442-2408310945-2408311140--32090",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "EWR",
                                    "displayCode": "EWR",
                                    "parent": {
                                        "flightPlaceId": "NYCA",
                                        "displayCode": "NYC",
                                        "name": "New York",
                                        "type": "City"
                                    },
                                    "name": "New York Newark",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T09:45:00",
                                "arrival": "2024-08-31T11:40:00",
                                "durationInMinutes": 475,
                                "flightNumber": "7961",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "11442-14355-2408311610-2408311819--32090",
                                "origin": {
                                    "flightPlaceId": "EWR",
                                    "displayCode": "EWR",
                                    "parent": {
                                        "flightPlaceId": "NYCA",
                                        "displayCode": "NYC",
                                        "name": "New York",
                                        "type": "City"
                                    },
                                    "name": "New York Newark",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T16:10:00",
                                "arrival": "2024-08-31T18:19:00",
                                "durationInMinutes": 189,
                                "flightNumber": "7708",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409071230--32090-1-10413-2409080705",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 695,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T12:30:00",
                        "arrival": "2024-09-08T07:05:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32090,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
                                    "name": "Lufthansa"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31528,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/%21%5C.png",
                                    "name": "Mesa Airlines DBA United Express"
                                },
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-12387-2409071230-2409071609--32090",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-09-07T12:30:00",
                                "arrival": "2024-09-07T16:09:00",
                                "durationInMinutes": 159,
                                "flightNumber": "7555",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31528,
                                    "name": "Mesa Airlines DBA United Express",
                                    "alternateId": "!\\",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "12387-10413-2409071730-2409080705--32090",
                                "origin": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-07T17:30:00",
                                "arrival": "2024-09-08T07:05:00",
                                "durationInMinutes": 455,
                                "flightNumber": "7640",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "tags": [
                    "third_cheapest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.834171
            },
            {
                "id": "10413-2408310730--32090-2-14355-2408311610|14355-2409071230--32090-1-10413-2409080705",
                "price": {
                    "raw": 1289.93,
                    "formatted": "$1,290",
                    "pricingOptionId": "0RbFZV8bMLou"
                },
                "legs": [
                    {
                        "id": "10413-2408310730--32090-2-14355-2408311610",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 940,
                        "stopCount": 2,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T07:30:00",
                        "arrival": "2024-08-31T16:10:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32090,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
                                    "name": "Lufthansa"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "partially_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-11616-2408310730-2408310845--32090",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "FRA",
                                    "displayCode": "FRA",
                                    "parent": {
                                        "flightPlaceId": "FRAN",
                                        "displayCode": "FRA",
                                        "name": "Frankfurt",
                                        "type": "City"
                                    },
                                    "name": "Frankfurt am Main",
                                    "type": "Airport",
                                    "country": "Germany"
                                },
                                "departure": "2024-08-31T07:30:00",
                                "arrival": "2024-08-31T08:45:00",
                                "durationInMinutes": 75,
                                "flightNumber": "1051",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "11616-12389-2408311000-2408311335--32090",
                                "origin": {
                                    "flightPlaceId": "FRA",
                                    "displayCode": "FRA",
                                    "parent": {
                                        "flightPlaceId": "FRAN",
                                        "displayCode": "FRA",
                                        "name": "Frankfurt",
                                        "type": "City"
                                    },
                                    "name": "Frankfurt am Main",
                                    "type": "Airport",
                                    "country": "Germany"
                                },
                                "destination": {
                                    "flightPlaceId": "IAH",
                                    "displayCode": "IAH",
                                    "parent": {
                                        "flightPlaceId": "HOUA",
                                        "displayCode": "HOU",
                                        "name": "Houston",
                                        "type": "City"
                                    },
                                    "name": "Houston George Bush Intercntl.",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T10:00:00",
                                "arrival": "2024-08-31T13:35:00",
                                "durationInMinutes": 635,
                                "flightNumber": "440",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "12389-14355-2408311455-2408311610--32090",
                                "origin": {
                                    "flightPlaceId": "IAH",
                                    "displayCode": "IAH",
                                    "parent": {
                                        "flightPlaceId": "HOUA",
                                        "displayCode": "HOU",
                                        "name": "Houston",
                                        "type": "City"
                                    },
                                    "name": "Houston George Bush Intercntl.",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T14:55:00",
                                "arrival": "2024-08-31T16:10:00",
                                "durationInMinutes": 75,
                                "flightNumber": "8639",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409071230--32090-1-10413-2409080705",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 695,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T12:30:00",
                        "arrival": "2024-09-08T07:05:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32090,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
                                    "name": "Lufthansa"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -31528,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/%21%5C.png",
                                    "name": "Mesa Airlines DBA United Express"
                                },
                                {
                                    "id": -31722,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/UA.png",
                                    "name": "United"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-12387-2409071230-2409071609--32090",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-09-07T12:30:00",
                                "arrival": "2024-09-07T16:09:00",
                                "durationInMinutes": 159,
                                "flightNumber": "7555",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31528,
                                    "name": "Mesa Airlines DBA United Express",
                                    "alternateId": "!\\",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "12387-10413-2409071730-2409080705--32090",
                                "origin": {
                                    "flightPlaceId": "IAD",
                                    "displayCode": "IAD",
                                    "parent": {
                                        "flightPlaceId": "WASA",
                                        "displayCode": "WAS",
                                        "name": "Washington, D.C.",
                                        "type": "City"
                                    },
                                    "name": "Washington Dulles",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-07T17:30:00",
                                "arrival": "2024-09-08T07:05:00",
                                "durationInMinutes": 455,
                                "flightNumber": "7640",
                                "marketingCarrier": {
                                    "id": -32090,
                                    "name": "Lufthansa",
                                    "alternateId": "LH",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -31722,
                                    "name": "United",
                                    "alternateId": "UA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "tags": [
                    "cheapest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.805474
            },
            {
                "id": "10413-2408311030--32480-1-14355-2408311753|14355-2409071346--32480-1-10413-2409081030",
                "price": {
                    "raw": 1369.69,
                    "formatted": "$1,370",
                    "pricingOptionId": "NHTcNANRJMJQ"
                },
                "legs": [
                    {
                        "id": "10413-2408311030--32480-1-14355-2408311753",
                        "origin": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 863,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-08-31T10:30:00",
                        "arrival": "2024-08-31T17:53:00",
                        "timeDeltaInDays": 0,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -32573,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                                    "name": "American Airlines"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "10413-10602-2408311030-2408311345--32480",
                                "origin": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "destination": {
                                    "flightPlaceId": "CLT",
                                    "displayCode": "CLT",
                                    "parent": {
                                        "flightPlaceId": "CLTA",
                                        "displayCode": "CLT",
                                        "name": "Charlotte",
                                        "type": "City"
                                    },
                                    "name": "Charlotte Douglas",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T10:30:00",
                                "arrival": "2024-08-31T13:45:00",
                                "durationInMinutes": 555,
                                "flightNumber": "1503",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "10602-14355-2408311647-2408311753--32480",
                                "origin": {
                                    "flightPlaceId": "CLT",
                                    "displayCode": "CLT",
                                    "parent": {
                                        "flightPlaceId": "CLTA",
                                        "displayCode": "CLT",
                                        "name": "Charlotte",
                                        "type": "City"
                                    },
                                    "name": "Charlotte Douglas",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-08-31T16:47:00",
                                "arrival": "2024-08-31T17:53:00",
                                "durationInMinutes": 126,
                                "flightNumber": "1789",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    },
                    {
                        "id": "14355-2409071346--32480-1-10413-2409081030",
                        "origin": {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong",
                            "displayCode": "MSY",
                            "city": "New Orleans",
                            "country": "United States",
                            "isHighlighted": false
                        },
                        "destination": {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle",
                            "displayCode": "CDG",
                            "city": "Paris",
                            "country": "France",
                            "isHighlighted": false
                        },
                        "durationInMinutes": 824,
                        "stopCount": 1,
                        "isSmallestStops": false,
                        "departure": "2024-09-07T13:46:00",
                        "arrival": "2024-09-08T10:30:00",
                        "timeDeltaInDays": 1,
                        "carriers": {
                            "marketing": [
                                {
                                    "id": -32480,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                                    "name": "British Airways"
                                }
                            ],
                            "operating": [
                                {
                                    "id": -32573,
                                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AA.png",
                                    "name": "American Airlines"
                                }
                            ],
                            "operationType": "not_operated"
                        },
                        "segments": [
                            {
                                "id": "14355-10968-2409071346-2409071532--32480",
                                "origin": {
                                    "flightPlaceId": "MSY",
                                    "displayCode": "MSY",
                                    "parent": {
                                        "flightPlaceId": "MSYA",
                                        "displayCode": "MSY",
                                        "name": "New Orleans",
                                        "type": "City"
                                    },
                                    "name": "New Orleans Louis Armstrong",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "departure": "2024-09-07T13:46:00",
                                "arrival": "2024-09-07T15:32:00",
                                "durationInMinutes": 106,
                                "flightNumber": "5071",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            },
                            {
                                "id": "10968-10413-2409071800-2409081030--32480",
                                "origin": {
                                    "flightPlaceId": "DFW",
                                    "displayCode": "DFW",
                                    "parent": {
                                        "flightPlaceId": "DFWA",
                                        "displayCode": "DFW",
                                        "name": "Dallas",
                                        "type": "City"
                                    },
                                    "name": "Dallas Fort Worth International",
                                    "type": "Airport",
                                    "country": "United States"
                                },
                                "destination": {
                                    "flightPlaceId": "CDG",
                                    "displayCode": "CDG",
                                    "parent": {
                                        "flightPlaceId": "PARI",
                                        "displayCode": "PAR",
                                        "name": "Paris",
                                        "type": "City"
                                    },
                                    "name": "Paris Charles de Gaulle",
                                    "type": "Airport",
                                    "country": "France"
                                },
                                "departure": "2024-09-07T18:00:00",
                                "arrival": "2024-09-08T10:30:00",
                                "durationInMinutes": 570,
                                "flightNumber": "1536",
                                "marketingCarrier": {
                                    "id": -32480,
                                    "name": "British Airways",
                                    "alternateId": "BA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                },
                                "operatingCarrier": {
                                    "id": -32573,
                                    "name": "American Airlines",
                                    "alternateId": "AA",
                                    "allianceId": 0,
                                    "displayCode": ""
                                }
                            }
                        ]
                    }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                    "isChangeAllowed": false,
                    "isPartiallyChangeable": false,
                    "isCancellationAllowed": false,
                    "isPartiallyRefundable": false
                },
                "fareAttributes": {},
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.796446
            }
        ],
        "messages": [],
        "filterStats": {
            "duration": {
                "min": 765,
                "max": 940,
                "multiCityMin": 1520,
                "multiCityMax": 1687
            },
            "airports": [
                {
                    "city": "New Orleans",
                    "airports": [
                        {
                            "id": "MSY",
                            "entityId": "95673750",
                            "name": "New Orleans Louis Armstrong"
                        }
                    ]
                },
                {
                    "city": "Paris",
                    "airports": [
                        {
                            "id": "CDG",
                            "entityId": "95565041",
                            "name": "Paris Charles de Gaulle"
                        }
                    ]
                }
            ],
            "carriers": [
                {
                    "id": -32480,
                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/BA.png",
                    "name": "British Airways"
                },
                {
                    "id": -32478,
                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/SN.png",
                    "name": "Brussels Airlines"
                },
                {
                    "id": -32090,
                    "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/LH.png",
                    "name": "Lufthansa"
                }
            ],
            "stopPrices": {
                "direct": {
                    "isPresent": false
                },
                "one": {
                    "isPresent": true,
                    "formattedPrice": "$1,298"
                },
                "twoOrMore": {
                    "isPresent": true,
                    "formattedPrice": "$1,290"
                }
            }
        },
        "flightsSessionId": "c0781a3c-29d3-4039-8837-8f666005e644",
        "destinationImageUrl": "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg",
        "token": "eyJhIjoxLCJjIjowLCJpIjowLCJjYyI6ImVjb25vbXkiLCJvIjoiUEFSSSIsImQiOiJNU1lBIiwiZDEiOiIyMDI0LTA4LTMxIiwiZDIiOiIyMDI0LTA5LTA3In0="
    },
    "status": true,
    "message": "Successful"
}