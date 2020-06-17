export interface GyeonggiAPIResponse {
    NAME: string
    ADDRESS: Address
    TELEPHONE_NUM: string
}

interface Address {
    FULL_ADDRESS: string
    ZIP_NUM: string

    PROVINCE: string
    CITY: string

    LATITUDE: number
    LONGITUDE: number
}

export interface GyeonggiAPIResponseAcademy extends GyeonggiAPIResponse {
    CLASSNAME: string
}