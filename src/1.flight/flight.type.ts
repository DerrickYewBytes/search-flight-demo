export type I_SearchRoundTripReq = {
    fromEntityId: string;
    toEntityId: string;
    departDate: string;
    returnDate: string;
    sort?: 'ASC' | 'DESC';
    groupByWeekends?: boolean;
};

export type I_SearchUnfocusedRoundTripReq = {
    fromEntityId: string;
    toEntityId?: string;
    departDate?: string;
    returnDate?: string;
    sort?: 'ASC' | 'DESC';
    groupByWeekends?: boolean;
};

export type I_Itinerary = {
    id: string;
    price: {
        raw: number;
        formatted: string;
        pricingOptionId: string;
    };
    trips: {
        id: string;
        origin: {
            id: string;
            name: string;
            displayCode: string;
            city: string;
            country: string;
        };
        destination: {
            id: string;
            name: string;
            displayCode: string;
            city: string;
            country: string;
        };
        durationInMinutes: number;
        stopCount: number;
        departureDate: string;
        arrivalDate: string;
        carriers: {
            marketing: {
                id: string;
                name: string;
                logoUrl: string;
            }[];
        };
    }[];
};

export type I_SearchRoundTripRes =
    | {
          itineraries: I_Itinerary[];
      }
    | {
          weekends: I_Itinerary[];
          weekdays: I_Itinerary[];
      };

export type IE_SkyScannerSearchRoundTrip =
    | IE_SkyScannerSearchRoundTripFocused
    | IE_SkyScannerSearchRoundTripUnfocusedAnywhereAnytime
    | IE_SkyScannerSearchRoundTripUnfocusedAnytimeOnly
    | IE_SkyScannerSearchRoundTripUnfocusedAnywhereFixedTime
    | IE_SkyScannerSearchRoundTripError;

export type IE_SkyScannerSearchRoundTripError = {
    errors: string;
    data: null;
    status: boolean;
    message: string;
};

export interface IE_SkyScannerSearchRoundTripFocused {
    data: {
        context: {
            status: string;
            sessionId: string;
            totalResults: number;
            [k: string]: unknown;
        };
        itineraries: {
            id: string;
            price: {
                raw: number;
                formatted: string;
                pricingOptionId: string;
                [k: string]: unknown;
            };
            legs: {
                id: string;
                origin: {
                    id: string;
                    entityId: string;
                    name: string;
                    displayCode: string;
                    city: string;
                    country: string;
                    isHighlighted: boolean;
                    [k: string]: unknown;
                };
                destination: {
                    id: string;
                    entityId: string;
                    name: string;
                    displayCode: string;
                    city: string;
                    country: string;
                    isHighlighted: boolean;
                    [k: string]: unknown;
                };
                durationInMinutes: number;
                stopCount: number;
                isSmallestStops: boolean;
                departure: string;
                arrival: string;
                timeDeltaInDays: number;
                carriers: {
                    marketing: {
                        id: number;
                        logoUrl: string;
                        name: string;
                        [k: string]: unknown;
                    }[];
                    operationType: string;
                    operating?: {
                        id: number;
                        logoUrl: string;
                        name: string;
                        [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                };
                segments: {
                    id: string;
                    origin: {
                        flightPlaceId: string;
                        displayCode: string;
                        parent: {
                            flightPlaceId: string;
                            displayCode: string;
                            name: string;
                            type: string;
                            [k: string]: unknown;
                        };
                        name: string;
                        type: string;
                        country: string;
                        [k: string]: unknown;
                    };
                    destination: {
                        flightPlaceId: string;
                        displayCode: string;
                        parent: {
                            flightPlaceId: string;
                            displayCode: string;
                            name: string;
                            type: string;
                            [k: string]: unknown;
                        };
                        name: string;
                        type: string;
                        country: string;
                        [k: string]: unknown;
                    };
                    departure: string;
                    arrival: string;
                    durationInMinutes: number;
                    flightNumber: string;
                    marketingCarrier: {
                        id: number;
                        name: string;
                        alternateId: string;
                        allianceId: number;
                        displayCode: string;
                        [k: string]: unknown;
                    };
                    operatingCarrier: {
                        id: number;
                        name: string;
                        alternateId: string;
                        allianceId: number;
                        displayCode: string;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                }[];
                [k: string]: unknown;
            }[];
            isSelfTransfer: boolean;
            isProtectedSelfTransfer: boolean;
            farePolicy: {
                isChangeAllowed: boolean;
                isPartiallyChangeable: boolean;
                isCancellationAllowed: boolean;
                isPartiallyRefundable: boolean;
                [k: string]: unknown;
            };
            eco?: {
                ecoContenderDelta: number;
                [k: string]: unknown;
            };
            fareAttributes: {
                [k: string]: unknown;
            };
            tags?: string[];
            isMashUp: boolean;
            hasFlexibleOptions: boolean;
            score: number;
            [k: string]: unknown;
        }[];
        messages: unknown[];
        filterStats: {
            duration: {
                min: number;
                max: number;
                multiCityMin: number;
                multiCityMax: number;
                [k: string]: unknown;
            };
            airports: {
                city: string;
                airports: {
                    id: string;
                    entityId: string;
                    name: string;
                    [k: string]: unknown;
                }[];
                [k: string]: unknown;
            }[];
            carriers: {
                id: number;
                logoUrl: string;
                name: string;
                [k: string]: unknown;
            }[];
            stopPrices: {
                direct: {
                    isPresent: boolean;
                    [k: string]: unknown;
                };
                one: {
                    isPresent: boolean;
                    formattedPrice: string;
                    [k: string]: unknown;
                };
                twoOrMore: {
                    isPresent: boolean;
                    formattedPrice: string;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        flightsSessionId: string;
        destinationImageUrl: string;
        token: string;
        [k: string]: unknown;
    };
    status: boolean;
    message: string;
    [k: string]: unknown;
}

export interface IE_SkyScannerSearchRoundTripUnfocusedAnywhereAnytime {
    data: {
        everywhereDestination: {
            context: {
                status: string;
                sessionId: string;
                totalResults: number;
                [k: string]: unknown;
            };
            features: {
                flightsIndicative: string;
                images: string;
                ads: string;
                [k: string]: unknown;
            };
            buckets: {
                id: string;
                label: string;
                category: string;
                resultIds: string[];
                flightQuotes: string;
                hotelQuotes: string;
                [k: string]: unknown;
            }[];
            results: {
                id: string;
                type: string;
                content: {
                    location: {
                        id: string;
                        skyCode: string;
                        name: string;
                        type: string;
                        [k: string]: unknown;
                    };
                    flightQuotes: {
                        cheapest: {
                            price: string;
                            rawPrice: number;
                            direct: boolean;
                            [k: string]: unknown;
                        };
                        direct?: {
                            price: string;
                            rawPrice: number;
                            direct: boolean;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    image: {
                        url: string;
                        [k: string]: unknown;
                    };
                    flightRoutes: {
                        directFlightsAvailable: boolean;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                entityId: string;
                skyId: string;
                [k: string]: unknown;
            }[];
            [k: string]: unknown;
        };
        context: {
            status: string;
            sessionId: string;
            totalResults: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    status: boolean;
    message: string;
    [k: string]: unknown;
}

export interface IE_SkyScannerSearchRoundTripUnfocusedAnytimeOnly {
    data: {
        flightQuotes: {
            buckets: {
                id: string;
                label: string;
                resultIds: string[];
                [k: string]: unknown;
            }[];
            results: {
                id: string;
                type: string;
                content: {
                    price: string;
                    rawPrice: number;
                    direct: boolean;
                    outboundLeg: {
                        originAirport: {
                            id: string;
                            skyCode: string;
                            name: string;
                            type: string;
                            [k: string]: unknown;
                        };
                        destinationAirport: {
                            id: string;
                            skyCode: string;
                            name: string;
                            type: string;
                            [k: string]: unknown;
                        };
                        localDepartureDate: string;
                        localDepartureDateLabel: string;
                        [k: string]: unknown;
                    };
                    inboundLeg: {
                        originAirport: {
                            id: string;
                            skyCode: string;
                            name: string;
                            type: string;
                            [k: string]: unknown;
                        };
                        destinationAirport: {
                            id: string;
                            skyCode: string;
                            name: string;
                            type: string;
                            [k: string]: unknown;
                        };
                        localDepartureDate: string;
                        localDepartureDateLabel: string;
                        [k: string]: unknown;
                    };
                    tripDuration: string;
                    [k: string]: unknown;
                };
                entityId: string;
                skyId: string;
                [k: string]: unknown;
            }[];
            months: {
                year: number;
                month: number;
                monthLabel: string;
                selected: boolean;
                [k: string]: unknown;
            }[];
            context: {
                status: string;
                sessionId: string;
                totalResults: number;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        differentDestination: {
            location: {
                id: string;
                skyCode: string;
                name: string;
                type: string;
                [k: string]: unknown;
            };
            context: {
                status: string;
                sessionId: string;
                totalResults: number;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        context: {
            status: string;
            sessionId: string;
            totalResults: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    status: boolean;
    message: string;
    [k: string]: unknown;
}

export interface IE_SkyScannerSearchRoundTripUnfocusedAnywhereFixedTime {
    data: {
        everywhereDestination: {
            context: {
                status: string;
                sessionId: string;
                totalResults: number;
                [k: string]: unknown;
            };
            features: {
                flightsIndicative: string;
                images: string;
                ads: string;
                [k: string]: unknown;
            };
            buckets: {
                id: string;
                label: string;
                category: string;
                resultIds: string[];
                flightQuotes: string;
                hotelQuotes: string;
                [k: string]: unknown;
            }[];
            results: {
                id: string;
                type: string;
                content: {
                    location: {
                        id: string;
                        skyCode: string;
                        name: string;
                        type: string;
                        [k: string]: unknown;
                    };
                    flightQuotes?: {
                        cheapest: {
                            price: string;
                            rawPrice: number;
                            direct: boolean;
                            [k: string]: unknown;
                        };
                        direct?: {
                            price: string;
                            rawPrice: number;
                            direct: boolean;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    image: {
                        url: string;
                        [k: string]: unknown;
                    };
                    flightRoutes?: {
                        directFlightsAvailable: boolean;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                entityId: string;
                skyId: string;
                [k: string]: unknown;
            }[];
            [k: string]: unknown;
        };
        context: {
            status: string;
            sessionId: string;
            totalResults: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    status: boolean;
    message: string;
    [k: string]: unknown;
}
