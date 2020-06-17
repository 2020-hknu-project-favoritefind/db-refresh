import Axios, { AxiosResponse } from "axios";
import { GyeonggiAPIResponse, GyeonggiAPIResponseAcademy } from "./ApiInterface"

export class GetPlaceFromPublicAPI {
    private key: string;

    public constructor(key: string) {
        this.key = key;
    }

    public async PublicSportFacility(): Promise<GyeonggiAPIResponse[]> {
        let _result: Array<any> = [];
        let result: Array<GyeonggiAPIResponse> = [];
        try {
            let res: any = await Axios.get(`https://openapi.gg.go.kr/PublicLivelihood?KEY=${this.key}&Type=json&pIndex=1&pSize=1000`);
            _result = res.data["PublicLivelihood"][1]["row"];

            _result.forEach(i => {
                if (i["FACLT_NM"] != null) {
                    result.push({
                        NAME: i["FACLT_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: i["CONTACT_NO"]
                    });
                }
            });
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    public async PhysicalTrainingCentre(): Promise<GyeonggiAPIResponse[]> {
        let _result: any[] = [];
        let result: GyeonggiAPIResponse[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/PhysicalTraining?KEY=${this.key}&type=json&pIndex=1&pSize=1000`);
            _result = res.data["PhysicalTraining"][1]["row"];
            _result.forEach(i => {
                if (i["BIZPLC_NM"] != null) {
                    result.push({
                        NAME: i["BIZPLC_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: i["CONTACT_NO"]
                    })
                }
            })
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    public async FishingCentre(): Promise<GyeonggiAPIResponse[]> {
        let _result: any[] = [];
        let result: GyeonggiAPIResponse[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/FISHPLCINFO?KEY=${this.key}&type=json&pIndex=1&pSize=1000`);
            _result = res.data["FISHPLCINFO"][1]["row"];

            _result.forEach(i => {
                if (i["FISHPLC_NM"] != null) {
                    result.push({
                        NAME: i["FISHPLC_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: "null"
                    })
                }
            })
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    public async DanceAcademy(): Promise<GyeonggiAPIResponse[]> {
        let _result: any[] = []
        let result: GyeonggiAPIResponse[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/DanceAcademy?KEY=${this.key}&type=json&pIndex=1&pSize=1000`);
            _result = res.data["DanceAcademy"][1]["row"];

            _result.forEach(i => {
                if (i["BIZPLC_NM"] != null) {
                    result.push({
                        NAME: i["BIZPLC_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: i["LOCPLC_FACTL_TELNO"]
                    })
                }
            })
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    public async Karaoke(): Promise<GyeonggiAPIResponse[]> {
        let _result: any[] = [];
        let result: GyeonggiAPIResponse[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/sngrumIndutype?KEY=${this.key}&type=json&pIndex=1&pSize=1000`);
            _result = res.data["sngrumIndutype"][1]["row"];

            _result.forEach(i => {
                if (i["BIZPLC_NM"] != null) {
                    result.push({
                        NAME: i["BIZPLC_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: i["LOCPLC_FACTL_TELNO"]
                    })
                }
            })
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    public async Academy(classname: string): Promise<GyeonggiAPIResponseAcademy[]> {
        let _result: any[] = [];
        let result: GyeonggiAPIResponseAcademy[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/TninsttInstutM?KEY=${this.key}&type=json&pIndex=1&pSize=1000`);
            _result = res.data["TninsttInstutM"][1]["row"];

            _result.forEach(i => {
                if (i["FACLT_NM"] != null && (i["CRSE_CLASS_NM"].indexOf(classname) != -1 || i["FACLT_NM"].indexOf(classname) != -1)) {
                    result.push({
                        NAME: i["FACLT_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: i["TELNO"],
                        CLASSNAME: i["CRSE_CLASS_NM"]
                    })
                }
            })
        } catch (error) {
            console.error(error)
        } finally {
            return result;
        }
    }

    public async MovieTheater(): Promise<GyeonggiAPIResponse[]> {
        let _result: any[] = [];
        let result: GyeonggiAPIResponse[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/MovieTheater?KEY=${this.key}&type=json&pIndex=1&pSize=1000`);
            _result = res.data["MovieTheater"][1]["row"];

            _result.forEach(i => {
                if (i["BIZPLC_NM"] != null) {
                    result.push({
                        NAME: i["BIZPLC_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: "null",
                    })
                }
            })
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    public async Theater(): Promise<GyeonggiAPIResponse[]> {
        let _result: any[] = [];
        let result: GyeonggiAPIResponse[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/PerformPlace?KEY=${this.key}&type=json&pIndex=1&pSize=1000`);
            _result = res.data["PerformPlace"][1]["row"];

            _result.forEach(i => {
                if (i["BIZPLC_NM"] != null) {
                    result.push({
                        NAME: i["BIZPLC_NM"],
                        ADDRESS: {
                            FULL_ADDRESS: i["REFINE_ROADNM_ADDR"],
                            ZIP_NUM: i["REFINE_ZIP_CD"],
                            PROVINCE: getProvinceFromAddress(i["REFINE_ROADNM_ADDR"]),
                            CITY: i["SIGUN_NM"],
                            LATITUDE: i["REFINE_WGS84_LAT"],
                            LONGITUDE: i["REFINE_WGS84_LOGT"]
                        },
                        TELEPHONE_NUM: "null",
                    })
                }
            })
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }
}

function getProvinceFromAddress(address: string): string {
    let result = /^\S*도/.exec(address);
    if (result) { return result[0] } else { return "" }
}
